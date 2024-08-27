/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	ZodArray,
	ZodDefault,
	ZodEffects,
	ZodEnum,
	ZodIntersection,
	ZodNullable,
	ZodObject,
	ZodRecord,
	ZodTuple,
	ZodTypeAny,
	ZodUnion,
	z,
} from 'zod'

const defaultValuesMap: Record<string, any> = {
	_ZodString: '',
	_ZodNumber: 0,
	_ZodBoolean: false,
	ZodDate: () => new Date(),
	ZodArray: [],
	ZodNull: null,
	ZodNullable: null,
	ZodTransformer: null,
}

export const getSchemaDefault = <Schema extends ZodTypeAny>(schema: Schema): z.infer<Schema> => {
	const processSchema = (schema: ZodTypeAny): any => {
		const innerSchema = schema instanceof ZodEffects ? schema._def.schema : schema

		if (innerSchema instanceof ZodObject) {
			return Object.fromEntries(
				Object.entries(innerSchema.shape).map(([key, value]: [string, any]) => {
					if (value instanceof z.ZodDefault) {
						return [key, value._def.defaultValue()]
					} else if (value instanceof ZodObject || value instanceof ZodEffects) {
						return [key, processSchema(value)]
					} else if (value instanceof ZodArray) {
						return [key, []]
					} else if (value instanceof ZodNullable) {
						return [key, null]
					} else if (value instanceof ZodEnum) {
						return [key, value._def.values[0]]
					} else {
						const typeName = value.constructor.name
						const defaultValue = defaultValuesMap[typeName]

						return [key, typeof defaultValue === 'function' ? defaultValue() : defaultValue]
					}
				})
			)
		} else if (innerSchema instanceof ZodDefault) {
			return innerSchema._def.defaultValue()
		} else if (innerSchema instanceof ZodArray) {
			return []
		} else if (innerSchema instanceof ZodUnion) {
			return processSchema(innerSchema._def.options[0])
		} else if (innerSchema instanceof ZodIntersection) {
			return {
				...processSchema(innerSchema._def.left),
				...processSchema(innerSchema._def.right),
			}
		} else if (innerSchema instanceof ZodTuple) {
			return innerSchema._def.items.map((item: ZodTypeAny) => processSchema(item))
		} else if (innerSchema instanceof ZodRecord) {
			return {}
		} else if (innerSchema instanceof ZodNullable) {
			return null
		} else {
			const typeName = innerSchema.constructor.name
			const defaultValue = defaultValuesMap[typeName]

			return typeof defaultValue === 'function' ? defaultValue() : defaultValue
		}
	}

	return processSchema(schema) as z.infer<Schema>
}

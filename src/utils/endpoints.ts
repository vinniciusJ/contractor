/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
const routes = {
	companies: {
		':id': {},
	},
	'contractual-types': {
		':id': {},
	},
	'contracted-company-employees': {
		':id': {},
	},
	'hiring-company-employees': {
		':id': {},
	},
	'hiring-companies': {
		':id': {},
	},
	'contracted-companies': {
		':id': {},
	},
	installments: {
		':id': {},
	},
	'payment-methods': {
		':id': {},
	},
	contracts: {},
} as const

type InferRoutes<T> = {
	[K in keyof T]: K extends string | number
		? T[K] extends Record<string, any>
			? `${K}` | `${K}/${InferRoutes<T[K]>}`
			: `${K}`
		: never
}[keyof T]

type RoutesWithVariables = InferRoutes<typeof routes>

type ExtractSubstrings<
	T extends string,
	Acc extends string[] = [],
> = T extends `${infer _Prefix}:${infer Value}/${infer Rest}`
	? ExtractSubstrings<Rest, [...Acc, Value]>
	: T extends `${infer _Prefix}:${infer Value}`
		? [...Acc, Value]
		: Acc

type FlattenUnion<T> = T extends (infer U)[] ? U : never

type RoutesVariables = `:${FlattenUnion<ExtractSubstrings<RoutesWithVariables>>}`

type ReplaceString<
	T extends string,
	P extends string,
	R extends string | number,
> = T extends `${infer Start}${P}${infer End}` ? `${Start}${R}${ReplaceString<End, P, R>}` : T

export type Endpoints = ReplaceString<RoutesWithVariables, RoutesVariables, string>

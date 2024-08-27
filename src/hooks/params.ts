import { useCallback } from 'react'

import { NavigateOptions, useSearchParams } from 'react-router-dom'

export const useQueryParams = () => {
	const [searchParams, setSearchParams] = useSearchParams()

	const getQueryParams = useCallback((key: string) => searchParams.get(key) ?? '', [searchParams])

	const setQueryParams = useCallback(
		(key: string, value: unknown, options?: NavigateOptions) => {
			setSearchParams((params) => {
				if (value) {
					params.set(key, String(value))
				} else {
					params.delete(key)
				}

				return params
			}, options)
		},
		[searchParams]
	)

	return {
		getQueryParams,
		setQueryParams,
	}
}

export const useQueryParam = (key: string, defaultValue?: string) => {
	const { getQueryParams, setQueryParams } = useQueryParams()

	const param = getQueryParams(key) || defaultValue

	const setQueryParam = useCallback(
		(value: unknown) => {
			setQueryParams(key, value)
		},
		[key]
	)

	return [param, setQueryParam] as const
}

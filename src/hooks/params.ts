import { NavigateOptions, useSearchParams } from 'react-router-dom'

export const useQueryParams = () => {
	const [searchParams, setSearchParams] = useSearchParams()

	const getQueryParams = (key: string) => searchParams.get(key) ?? ''

	const setQueryParams = (key: string, value: unknown, options?: NavigateOptions) => {
		setSearchParams((params) => {
			if (value) {
				params.set(key, String(value))
			} else {
				params.delete(key)
			}

			return params
		}, options)
	}

	return {
		getQueryParams,
		setQueryParams,
	}
}

export const useQueryParam = (key: string, defaultValue?: string) => {
	const { getQueryParams, setQueryParams } = useQueryParams()

	const param = getQueryParams(key) || defaultValue

	const setQueryParam = (value: unknown, options?: NavigateOptions) => {
		setQueryParams(key, value, options)
	}

	return [param, setQueryParam] as const
}

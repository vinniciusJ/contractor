import { getSchemaDefault } from '../schema'
import { getPageableReturnSchema } from '@/schemas/utils/mutations'

export const DEFAULT_PAGE = getSchemaDefault(getPageableReturnSchema)

export const LIGHT_WEIGHT = 300
export const REGULAR_WEIGHT = 400
export const MEDIUM_WEIGHT = 500
export const SEMIBOLD_WEIGHT = 600

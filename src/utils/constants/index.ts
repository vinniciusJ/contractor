import { getSchemaDefault } from '../schema'
import { getPageableReturnSchema } from '@/schemas/utils/mutations'

export const DEFAULT_PAGE = getSchemaDefault(getPageableReturnSchema)

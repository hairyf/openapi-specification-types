import type { AnyObject } from './common'
import type { Schema } from './schema'

export interface RequestBody {
  description?: string
  content: {
    [type: string]: {
      schema: Schema
      example: AnyObject
      examples: Record<string, AnyObject>
      encoding: Record<string, AnyObject>
    }
  }
  required?: boolean
}

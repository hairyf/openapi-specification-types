import { AnyObject } from "./common"
import { Schema } from "./schema"

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
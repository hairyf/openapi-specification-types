import type { AnyObject, Reference } from './common'
import type { Schema } from './schema'

/** Media Type Object — content for a media type (RequestBody, Response) (OpenAPI 3.x). */
export interface RequestBodyContent {
  schema?: Schema
  itemSchema?: Schema
  example?: unknown
  examples?: Record<string, AnyObject>
  encoding?: Record<string, AnyObject>
}

export interface RequestBody {
  description?: string
  /** **REQUIRED**. Media type or range → Media Type or Reference; at least one entry. */
  content: Record<string, RequestBodyContent | Reference>
  required?: boolean
}

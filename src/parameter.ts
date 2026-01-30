import type { Schema } from './schema'

/** collectionFormat for array parameters (Swagger 2.0; OpenAPI 3.x uses style/explode). */
export type CollectionFormat = 'csv' | 'ssv' | 'tsv' | 'pipes' | 'multi'

/**
 * Items (Swagger 2.0 only) — used for non-body array parameters and Header when type is array.
 * Limited subset: no $ref, no file/object; only string, number, integer, boolean, or array (nested).
 * OpenAPI 3.x uses Schema for parameter items.
 * @see https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md
 */
export interface Items {
  type: 'string' | 'number' | 'integer' | 'boolean' | 'array'
  format?: string
  /** Required when type is "array"; recursive Items. */
  items?: Items
  /** csv, ssv, tsv, pipes (default csv). No "multi" inside Items. */
  collectionFormat?: 'csv' | 'ssv' | 'tsv' | 'pipes'
  default?: unknown
  maximum?: number
  minimum?: number
  exclusiveMaximum?: boolean
  exclusiveMinimum?: boolean
  maxLength?: number
  minLength?: number
  pattern?: string
  maxItems?: number
  minItems?: number
  uniqueItems?: boolean
  enum?: unknown[]
  multipleOf?: number
}

/** Parameter style (OpenAPI 3.x). */
export type ParameterStyle
  = | 'matrix'
    | 'label'
    | 'simple'
    | 'form'
    | 'spaceDelimited'
    | 'pipeDelimited'
    | 'deepObject'
    | 'cookie'

/**
 * Parameter — body/formData/path/query/header (Swagger 2.0) or cookie/querystring (OpenAPI 3.x).
 * Swagger 2.0: when in !== "body" and type === "array", items MUST be Items (see Items), not full Schema.
 */
export interface Parameter extends Omit<Schema, 'required'> {
  name: string
  /** body/formData = Swagger 2.0; path/query/header/cookie/querystring = OpenAPI 3.x. */
  in: 'body' | 'header' | 'query' | 'path' | 'formData' | 'cookie' | 'querystring'
  /** Required when in is not body; one of string, number, integer, boolean, array, file. */
  type?: Schema['type'] | 'file'
  description?: string
  required?: boolean
  /** OpenAPI 3.x: default false. */
  deprecated?: boolean
  /** Required when in is body; Schema Object for the whole body. For OpenAPI 3.x use schema OR content (not both). */
  schema?: Schema
  /** For array: Swagger 2.0 non-body uses Items; body uses Schema. OpenAPI 3.x: Schema. */
  items?: Schema | Items
  /** For array (non-body): csv, ssv, tsv, pipes, multi (query/formData only) — Swagger 2.0. */
  collectionFormat?: CollectionFormat
  /** For query/formData — allows empty value. */
  allowEmptyValue?: boolean
  /** OpenAPI 3.x: serialization style (path default simple; query form; header/cookie simple). */
  style?: ParameterStyle
  /** OpenAPI 3.x: for array/object separate params per value. */
  explode?: boolean
  /** OpenAPI 3.x: reserved expansion (RFC6570). */
  allowReserved?: boolean
  /** OpenAPI 3.x: one media type → representation; required for in: "querystring". */
  content?: Record<string, unknown>
}

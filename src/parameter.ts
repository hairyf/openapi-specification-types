import type { Schema } from './schema'

/** collectionFormat for array parameters (Swagger 2.0). */
export type CollectionFormatV2 = 'csv' | 'ssv' | 'tsv' | 'pipes' | 'multi'

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

/** Parameter.required is boolean (body/formData); Schema.required is string[]. */
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
  /** For array (non-body): csv, ssv, tsv, pipes, multi (query/formData only) — Swagger 2.0. */
  collectionFormat?: CollectionFormatV2
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

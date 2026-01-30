import type { Schema } from './schema'

/** collectionFormat for array parameters (Swagger 2.0). */
export type CollectionFormatV2 = 'csv' | 'ssv' | 'tsv' | 'pipes' | 'multi'

/** Parameter.required is boolean (body/formData); Schema.required is string[]. */
export interface Parameter extends Omit<Schema, 'required'> {
  name: string
  in: 'body' | 'header' | 'query' | 'path' | 'formData'
  /** Required when in is not body; one of string, number, integer, boolean, array, file. */
  type?: Schema['type'] | 'file'
  description?: string
  required?: boolean
  /** Required when in is body; Schema Object for the whole body. */
  schema?: Schema
  /** For array (non-body): csv, ssv, tsv, pipes, multi (query/formData only). */
  collectionFormat?: CollectionFormatV2
  /** For query/formData — allows empty value. */
  allowEmptyValue?: boolean
}

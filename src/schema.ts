/** JSON Schema / Swagger 2.0 primitive types; file for Parameter/Response only. */
export type SchemaType = 'string' | 'number' | 'integer' | 'boolean' | 'array' | 'object' | 'file'

export interface Schema {
  $ref?: string
  format?: string
  title?: string
  description?: string
  default?: unknown
  type?: SchemaType | SchemaType[]
  /** JSON Schema validation. */
  multipleOf?: number
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
  maxProperties?: number
  minProperties?: number
  required?: string[]
  enum?: unknown[]
  items?: Schema
  allOf?: Schema[]
  properties?: Properties
  additionalProperties?: Schema | boolean
  /** Swagger 2.0: polymorphism; property name in required; value = definition name. */
  discriminator?: string
  /** Swagger 2.0: property only in response. */
  readOnly?: boolean
  /** Swagger 2.0: example instance. */
  example?: unknown
  xml?: { name?: string, namespace?: string, prefix?: string, attribute?: boolean, wrapped?: boolean }
  externalDocs?: { url: string, description?: string }
  /** Legacy / codegen. */
  originalRef?: string
}

export interface Properties {
  [name: string]: Schema
}

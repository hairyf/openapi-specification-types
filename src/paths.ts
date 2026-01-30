import type { RequestBody } from './body'
import type { Reference } from './common'
import type { Parameter } from './parameter'
import type { Schema } from './schema'

// ---- Swagger 2.0 (OpenAPI 2.0) ----

/** Security Requirement Object — scheme name to list of scopes ([] for basic/apiKey). */
export interface SecurityRequirementV2 {
  [schemeName: string]: string[]
}

/** Header Object — response header (Swagger 2.0). */
export interface HeaderObjectV2 {
  description?: string
  type: 'string' | 'number' | 'integer' | 'boolean' | 'array'
  format?: string
  items?: Schema
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

/** Headers Object — header name to Header Object (Swagger 2.0). */
export interface HeadersObjectV2 {
  [name: string]: HeaderObjectV2
}

/** Response Object — at least description (Swagger 2.0). */
export interface ResponseObjectV2 {
  description: string
  schema?: Schema
  headers?: HeadersObjectV2
  /** MIME type to example value. */
  examples?: Record<string, unknown>
}

/** Response definition or $ref (Swagger 2.0). */
export type ResponseV2 = ResponseObjectV2 | Reference

/** Responses Object — status code or "default" to Response (Swagger 2.0). */
export interface ResponsesObjectV2 {
  [statusCode: string]: ResponseV2
}

/** Operation Object (Swagger 2.0). */
export interface OperationObjectV2 {
  tags?: string[]
  summary?: string
  description?: string
  externalDocs?: { description?: string, url: string }
  operationId?: string
  consumes?: string[]
  produces?: string[]
  parameters?: (Parameter | Reference)[]
  /** At least one response required. */
  responses: ResponsesObjectV2
  schemes?: ('http' | 'https' | 'ws' | 'wss')[]
  deprecated?: boolean
  security?: SecurityRequirementV2[]
}

/** Path Item Object or $ref (Swagger 2.0). */
export interface PathItemV2 {
  $ref?: string
  get?: OperationObjectV2
  put?: OperationObjectV2
  post?: OperationObjectV2
  delete?: OperationObjectV2
  options?: OperationObjectV2
  head?: OperationObjectV2
  patch?: OperationObjectV2
  parameters?: (Parameter | Reference)[]
}

/** Paths Object (Swagger 2.0). */
export interface PathsV2 {
  [path: string]: PathItemV2
}

// ---- OpenAPI 3.x (shared / legacy) ----

export interface Paths {
  [path: string]: {
    get?: Method
    put?: Method
    post?: Method
    delete?: Method
    options?: Method
    head?: Method
    patch?: Method
    parameters?: Parameter[]
  }
}

export interface Method {
  tags?: string[]
  summary?: string
  description?: string
  operationId?: string
  consumes?: string[]
  produces?: string[]
  parameters?: Parameter[]
  responses: Responses
  security?: Security[]
  requestBody?: RequestBody
}

export interface Responses {
  [status: string]: {
    description?: string
    content?: {
      [mediaType: string]: {
        schema?: Schema
        example?: unknown
        examples?: Record<string, unknown>
        encoding?: Record<string, unknown>
      }
    }
    headers?: Record<string, unknown>
  }
}

export interface Security {
  [schemeName: string]: string[]
}

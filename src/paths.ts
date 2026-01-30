import type { RequestBody } from './body'
import type { Reference, SecurityRequirement } from './common'
import type { Parameter } from './parameter'
import type { Schema } from './schema'
import type { Server } from './server'

// ---- Swagger 2.0 (OpenAPI 2.0) ----

/** Security Requirement (Swagger 2.0) — alias of shared SecurityRequirement. */
export type SecurityRequirementV2 = SecurityRequirement

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

/** Media Type Object — content for a media type (OpenAPI 3.x). */
export interface MediaTypeObject {
  schema?: Schema
  /** Sequential media types (e.g. application/jsonl) — per-item schema (OpenAPI 3.1+). */
  itemSchema?: Schema
  example?: unknown
  examples?: Record<string, unknown>
  encoding?: Record<string, unknown>
}

/** Response Object — possible response (OpenAPI 3.x). */
export interface ResponseObject {
  description?: string
  summary?: string
  headers?: Record<string, unknown>
  /** Media type or range → Media Type Object or Reference. */
  content?: Record<string, MediaTypeObject | Reference>
  links?: Record<string, unknown>
}

/** Response or $ref (OpenAPI 3.x). */
export type Response = ResponseObject | Reference

/** Responses Object — status code or "default" to Response (OpenAPI 3.x). */
export interface Responses {
  [status: string]: Response
}

/** Operation Object — one API operation (OpenAPI 3.x). */
export interface Method {
  tags?: string[]
  summary?: string
  description?: string
  externalDocs?: { url: string, description?: string }
  operationId?: string
  parameters?: (Parameter | Reference)[]
  requestBody?: RequestBody | Reference
  responses: Responses
  callbacks?: Record<string, unknown>
  deprecated?: boolean
  security?: Security[]
  servers?: Server[]
}

/** Path Item Object — operations on a single path (OpenAPI 3.x). */
export interface PathItemObject {
  $ref?: string
  summary?: string
  description?: string
  get?: Method
  put?: Method
  post?: Method
  delete?: Method
  options?: Method
  head?: Method
  patch?: Method
  trace?: Method
  /** QUERY method (IETF safe-method-w-body) (OpenAPI 3.2). */
  query?: Method
  /** Additional HTTP methods (OpenAPI 3.2). */
  additionalOperations?: Record<string, Method>
  servers?: Server[]
  parameters?: (Parameter | Reference)[]
}

export interface Paths {
  [path: string]: PathItemObject
}

/** Security Requirement (OpenAPI 3.x) — alias of shared SecurityRequirement. */
export type Security = SecurityRequirement

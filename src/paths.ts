import type { RequestBody } from './body'
import type { Reference, SecurityRequirement } from './common'
import type { Header, Link } from './header-link'
import type { Items, Parameter } from './parameter'
import type { Schema } from './schema'
import type { Server } from './server'

// ---- Swagger 2.0 (OpenAPI 2.0) ----
// Types below cannot be merged with OpenAPI 3.x: different structure (e.g. Response has schema/examples vs content/links; Header has type/items vs schema/content; Operation has consumes/produces vs requestBody/callbacks).

/** Header (Swagger 2.0) — response header. Uses Items for array items, not full Schema. V3 uses schema/content. */
export interface HeaderV2 {
  description?: string
  type: 'string' | 'number' | 'integer' | 'boolean' | 'array'
  format?: string
  /** Required when type is "array"; Items (no $ref/file). */
  items?: Items
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

/** Headers (Swagger 2.0) — header name to Header. */
export interface HeadersV2 {
  [name: string]: HeaderV2
}

/** Response (Swagger 2.0) — at least description. */
export interface ResponseV2 {
  description: string
  schema?: Schema
  headers?: HeadersV2
  /** MIME type to example value. */
  examples?: Record<string, unknown>
}

/** Response definition or $ref (Swagger 2.0). */
export type ResponseV2Ref = ResponseV2 | Reference

/** Responses (Swagger 2.0) — status code or "default" to Response. */
export interface ResponsesV2 {
  [statusCode: string]: ResponseV2Ref
}

/** Operation (Swagger 2.0). */
export interface OperationV2 {
  tags?: string[]
  summary?: string
  description?: string
  externalDocs?: { description?: string, url: string }
  operationId?: string
  consumes?: string[]
  produces?: string[]
  parameters?: (Parameter | Reference)[]
  /** At least one response required. */
  responses: ResponsesV2
  schemes?: ('http' | 'https' | 'ws' | 'wss')[]
  deprecated?: boolean
  security?: SecurityRequirement[]
}

/** Path Item (Swagger 2.0) — inline definition; do not mix with $ref. */
export interface PathItemV2 {
  get?: OperationV2
  put?: OperationV2
  post?: OperationV2
  delete?: OperationV2
  options?: OperationV2
  head?: OperationV2
  patch?: OperationV2
  parameters?: (Parameter | Reference)[]
}

/** Path Item $ref (Swagger 2.0) — when present, other path fields must not be used. */
export interface PathItemRefV2 {
  $ref: string
}

/** Path Item or $ref (Swagger 2.0). */
export type PathItemV2Ref = PathItemRefV2 | PathItemV2

/** Paths (Swagger 2.0). */
export interface PathsV2 {
  [path: string]: PathItemV2Ref
}

// ---- OpenAPI 3.x (shared / legacy) ----

/** Media Type (OpenAPI 3.x) — content for a media type. */
export interface MediaType {
  schema?: Schema
  /** Sequential media types (e.g. application/jsonl) — per-item schema (OpenAPI 3.1+). */
  itemSchema?: Schema
  example?: unknown
  examples?: Record<string, unknown>
  encoding?: Record<string, unknown>
}

/** Response (OpenAPI 3.x) — possible response. */
export interface Response {
  description?: string
  summary?: string
  /** Header name → Header or Reference (reused from Components). */
  headers?: Record<string, Header | Reference>
  /** Media type or range → Media Type or Reference. */
  content?: Record<string, MediaType | Reference>
  /** Link name → Link or Reference (reused from Components). */
  links?: Record<string, Link | Reference>
}

/** Response or $ref (OpenAPI 3.x). */
export type ResponseRef = Response | Reference

/** Responses (OpenAPI 3.x) — status code or "default" to Response. */
export interface Responses {
  [status: string]: ResponseRef
}

/** Operation (OpenAPI 3.x) — one API operation. */
export interface Method {
  tags?: string[]
  summary?: string
  description?: string
  externalDocs?: { url: string, description?: string }
  operationId?: string
  parameters?: (Parameter | Reference)[]
  requestBody?: RequestBody | Reference
  responses: Responses
  /** Runtime expression → Path Item or Reference (Callback). */
  callbacks?: Record<string, PathItem | Reference>
  deprecated?: boolean
  security?: Security[]
  servers?: Server[]
}

/** Path Item (OpenAPI 3.x) — operations on a single path. */
export interface PathItem {
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
  [path: string]: PathItem
}

/** Security Requirement (OpenAPI 3.x) — alias of shared SecurityRequirement. */
export type Security = SecurityRequirement

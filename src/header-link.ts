import type { Schema } from './schema'

/**
 * Header (OpenAPI 3.x) — response/multipart header; follows Parameter (schema or content).
 * No name/in; style only "simple". Shared by Response.headers and Components.headers.
 */
export interface Header {
  description?: string
  required?: boolean
  deprecated?: boolean
  style?: 'simple'
  explode?: boolean
  schema?: Schema
  /** One media type → Media Type or Reference. */
  content?: Record<string, unknown>
  example?: unknown
  examples?: Record<string, unknown>
}

/**
 * Link (OpenAPI 3.x) — design-time link to another operation.
 * Shared by Response.links and Components.links.
 */
export interface Link {
  operationRef?: string
  operationId?: string
  parameters?: Record<string, unknown>
  requestBody?: unknown
  description?: string
  server?: unknown
}

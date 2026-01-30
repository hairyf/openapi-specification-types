import type { RequestBody } from './body'
import type { Reference, StringObject } from './common'

import type { Definitions } from './definitions'
import type { Parameter } from './parameter'
import type { MediaTypeObject, PathItemObject, Response } from './paths'
import type { Schema } from './schema'

/** Components Object — reusable objects (OpenAPI 3.x). At least one of components, paths, or webhooks MUST be present at root. */
export interface Components {
  schemas?: Definitions
  responses?: Record<string, Response>
  parameters?: Record<string, Parameter | Reference>
  examples?: Record<string, ExampleObject | Reference>
  requestBodies?: Record<string, RequestBody | Reference>
  headers?: Record<string, HeaderObject | Reference>
  securitySchemes?: Record<string, SecurityScheme | Reference>
  links?: Record<string, LinkObject | Reference>
  callbacks?: Record<string, CallbackObject | Reference>
  pathItems?: Record<string, PathItemObject | Reference>
  mediaTypes?: Record<string, MediaTypeObject | Reference>
}

/** Request Body or $ref (OpenAPI 3.x). */
export interface RequestBodies {
  [name: string]: RequestBody | Reference
}

/** Example Object — summary, description, value/dataValue/serializedValue/externalValue (OpenAPI 3.x). */
export interface ExampleObject {
  summary?: string
  description?: string
  value?: unknown
  dataValue?: unknown
  serializedValue?: string
  externalValue?: string
}

/** Header Object — follows Parameter (schema or content); no name/in (OpenAPI 3.x). */
export interface HeaderObject {
  description?: string
  required?: boolean
  deprecated?: boolean
  style?: 'simple'
  explode?: boolean
  schema?: Schema
  content?: Record<string, unknown>
  example?: unknown
  examples?: Record<string, unknown>
}

/** Link Object — design-time link to another operation (OpenAPI 3.x). */
export interface LinkObject {
  operationRef?: string
  operationId?: string
  parameters?: Record<string, unknown>
  requestBody?: unknown
  description?: string
  server?: unknown
}

/** Callback Object — runtime expression to Path Item (OpenAPI 3.x). */
export interface CallbackObject {
  [expression: string]: PathItemObject
}

// Re-export MediaTypeObject from paths for consumers
export type { MediaTypeObject } from './paths'

// ---- Security Scheme (OpenAPI 3.x discriminated union) ----

export interface SecuritySchemes {
  [name: string]: SecurityScheme | Reference
}

/** apiKey — name and in required. */
export interface ApiKeySecurityScheme {
  type: 'apiKey'
  name: string
  in: 'query' | 'header' | 'cookie'
  description?: string
  deprecated?: boolean
}

/** http — scheme required (e.g. basic, bearer); bearerFormat for bearer. */
export interface HttpSecurityScheme {
  type: 'http'
  scheme: string
  bearerFormat?: string
  description?: string
  deprecated?: boolean
}

/** mutualTLS — client certificate (OpenAPI 3.1+). */
export interface MutualTlsSecurityScheme {
  type: 'mutualTLS'
  description?: string
  deprecated?: boolean
}

/** OAuth Flow Object — URLs and scopes per flow (OpenAPI 3.x). */
export interface OAuthFlow {
  authorizationUrl?: string
  deviceAuthorizationUrl?: string
  tokenUrl?: string
  refreshUrl?: string
  scopes: StringObject
}

/** OAuth Flows Object — implicit, password, clientCredentials, authorizationCode, deviceAuthorization (OpenAPI 3.2). */
export interface OAuthFlows {
  implicit?: OAuthFlow
  password?: OAuthFlow
  clientCredentials?: OAuthFlow
  authorizationCode?: OAuthFlow
  deviceAuthorization?: OAuthFlow
}

/** oauth2 — flows required. */
export interface OAuth2SecurityScheme {
  type: 'oauth2'
  flows: OAuthFlows
  oauth2MetadataUrl?: string
  description?: string
  deprecated?: boolean
}

/** openIdConnect — openIdConnectUrl required. */
export interface OpenIdConnectSecurityScheme {
  type: 'openIdConnect'
  openIdConnectUrl: string
  description?: string
  deprecated?: boolean
}

export type SecurityScheme
  = | ApiKeySecurityScheme
    | HttpSecurityScheme
    | MutualTlsSecurityScheme
    | OAuth2SecurityScheme
    | OpenIdConnectSecurityScheme

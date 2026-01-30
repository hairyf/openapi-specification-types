import type { RequestBody } from './body'
import type { Reference, StringObject } from './common'
import type { Definitions } from './definitions'
import type { Header, Link } from './header-link'
import type { Parameter } from './parameter'
import type { MediaType, PathItem, ResponseRef } from './paths'

/** Components (OpenAPI 3.x) — reusable objects. At least one of components, paths, or webhooks MUST be present at root. */
export interface Components {
  schemas?: Definitions
  responses?: Record<string, ResponseRef>
  parameters?: Record<string, Parameter | Reference>
  examples?: Record<string, Example | Reference>
  requestBodies?: Record<string, RequestBody | Reference>
  headers?: Record<string, Header | Reference>
  securitySchemes?: Record<string, SecurityScheme | Reference>
  links?: Record<string, Link | Reference>
  callbacks?: Record<string, Callback | Reference>
  pathItems?: Record<string, PathItem | Reference>
  mediaTypes?: Record<string, MediaType | Reference>
}

/** Request Body or $ref (OpenAPI 3.x). */
export interface RequestBodies {
  [name: string]: RequestBody | Reference
}

/** Example (OpenAPI 3.x) — summary, description, value/dataValue/serializedValue/externalValue. */
export interface Example {
  summary?: string
  description?: string
  value?: unknown
  dataValue?: unknown
  serializedValue?: string
  externalValue?: string
}

export type { Header, Link } from './header-link'

/** Callback (OpenAPI 3.x) — runtime expression to Path Item. */
export interface Callback {
  [expression: string]: PathItem
}

// Re-export MediaType from paths for consumers
export type { MediaType } from './paths'

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

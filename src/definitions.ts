import type { Parameter } from './parameter'
import type { ResponseV2 } from './paths'
import type { Schema } from './schema'

/** Definition is a Schema Object — reusable type under definitions (Swagger 2.0). */
export type Definition = Schema

export interface Definitions {
  [name: string]: Definition
}

/** Parameters Definitions Object — name maps to full Parameter Object; reference elsewhere with #/parameters/name (Spec § Parameters Definitions Object). */
export interface ParametersDefinitions {
  [name: string]: Parameter
}

/** Responses Definitions (Swagger 2.0) — name maps to full Response; reference elsewhere with #/responses/name. */
export interface ResponsesDefinitions {
  [name: string]: ResponseV2
}

/** OAuth2 flow (Swagger 2.0 only). OpenAPI 3.x uses OAuth Flows object. */
export type OAuth2Flow = 'implicit' | 'password' | 'application' | 'accessCode'

/** Scopes — scope name to description (Swagger 2.0 only). */
export interface Scopes {
  [name: string]: string
}

/** Security scheme (2.0 only): basic. Cannot merge with 3.x (http with scheme "basic" has different structure). */
export interface SecuritySchemeBasicV2 {
  type: 'basic'
  description?: string
}

/** Security scheme (2.0 only): apiKey, in query|header. 3.x adds cookie and different optional fields. */
export interface SecuritySchemeApiKeyV2 {
  type: 'apiKey'
  name: string
  in: 'query' | 'header'
  description?: string
}

/** Security scheme (2.0 only): oauth2 with flow + authorizationUrl/tokenUrl. 3.x uses OAuth Flows object. */
export interface SecuritySchemeOAuth2V2 {
  type: 'oauth2'
  flow: OAuth2Flow
  scopes: Scopes
  authorizationUrl?: string
  tokenUrl?: string
  description?: string
}

export type SecurityDefinitionScheme
  = | SecuritySchemeBasicV2
    | SecuritySchemeApiKeyV2
    | SecuritySchemeOAuth2V2

export interface SecurityDefinitions {
  [name: string]: SecurityDefinitionScheme
}

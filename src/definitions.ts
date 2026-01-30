import type { Parameter } from './parameter'
import type { ResponseObjectV2 } from './paths'
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

/** Responses Definitions Object — name maps to full Response Object; reference elsewhere with #/responses/name (Spec § Responses Definitions Object). */
export interface ResponsesDefinitions {
  [name: string]: ResponseObjectV2
}

/** OAuth2 flow: implicit | password | application | accessCode (Swagger 2.0). */
export type OAuth2FlowV2 = 'implicit' | 'password' | 'application' | 'accessCode'

/** Scopes Object — scope name to description (Swagger 2.0). */
export interface ScopesV2 {
  [name: string]: string
}

/** Security Scheme: basic — no extra fields (Swagger 2.0). */
export interface SecuritySchemeBasicV2 {
  type: 'basic'
  description?: string
}

/** Security Scheme: apiKey — name and in required (Swagger 2.0). */
export interface SecuritySchemeApiKeyV2 {
  type: 'apiKey'
  name: string
  in: 'query' | 'header'
  description?: string
}

/** Security Scheme: oauth2 — flow + authorizationUrl/tokenUrl (per flow) + scopes (Swagger 2.0). */
export interface SecuritySchemeOAuth2V2 {
  type: 'oauth2'
  flow: OAuth2FlowV2
  scopes: ScopesV2
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

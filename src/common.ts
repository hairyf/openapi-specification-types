export interface StringObject { [key: string]: string }
export interface AnyObject { [key: string]: any }

/** JSON Reference — used for $ref in Swagger 2.0 / OpenAPI (parameter, response, path, schema). */
export interface Reference {
  $ref: string
  /** OpenAPI 3.x: override referenced component summary. */
  summary?: string
  /** OpenAPI 3.x: override referenced component description. */
  description?: string
}

/** Security Requirement — scheme name to list of scopes ([] for apiKey/http/mutualTLS). Shared by Swagger 2.0 and OpenAPI 3.x. */
export interface SecurityRequirement {
  [schemeName: string]: string[]
}

/** Contact Object — optional contact for the API (Swagger 2.0 / OpenAPI 3.x). */
export interface Contact {
  name?: string
  url?: string
  email?: string
}

/** License Object — name required when present; identifier/url optional (OpenAPI 3.x); v2 uses name + url only. */
export interface License {
  name: string
  identifier?: string
  url?: string
}

/** Info Object — API metadata; title and version required (Swagger 2.0 / OpenAPI 3.x). */
export interface Info {
  title: string
  version: string
  summary?: string
  description?: string
  termsOfService?: string
  contact?: Contact
  license?: License
}

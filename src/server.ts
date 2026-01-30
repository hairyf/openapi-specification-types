/** Server Object — target host; supports variables in {braces} (OpenAPI 3.x). */
export interface Server {
  /** **REQUIRED**. Target host URL; query and fragment MUST NOT be used. */
  url: string
  description?: string
  /** Optional unique string for the host (OpenAPI 3.1+). */
  name?: string
  variables?: Record<string, ServerVariable>
}

/** Server Variable Object — substitution in server url (OpenAPI 3.x). */
export interface ServerVariable {
  /** **REQUIRED**. Default for substitution; MUST be in enum if enum is defined. */
  default: string
  /** If present, substitution values from this set. */
  enum?: string[]
  description?: string
}

import type { AnyObject } from './common'
import type { Definitions, ParametersDefinitions, ResponsesDefinitions, SecurityDefinitions } from './definitions'
import type { PathsV2, SecurityRequirementV2 } from './paths'

import type { Tag } from './tag'

/** Contact Object — optional under Info (Swagger 2.0). */
export interface ContactV2 {
  name?: string
  url?: string
  email?: string
}

/** License Object — optional under Info; name required when present (Swagger 2.0). */
export interface LicenseV2 {
  name: string
  url?: string
}

/** Info Object — required at root; title and version required (Swagger 2.0). */
export interface InfoV2 {
  title: string
  version: string
  description?: string
  termsOfService?: string
  contact?: ContactV2
  license?: LicenseV2
}

/** External Documentation Object (Swagger 2.0). */
export interface ExternalDocsV2 {
  url: string
  description?: string
}

export interface OpenAPISpecificationV2 extends AnyObject {
  /** MUST be "2.0". */
  swagger: '2.0'
  /** API metadata; required. */
  info: InfoV2
  /** Available paths and operations; required. */
  paths: PathsV2

  /** Host only (no scheme/path); MAY include port. */
  host?: string
  /** Path relative to host; MUST start with /. */
  basePath?: string
  /** "http" | "https" | "ws" | "wss". */
  schemes?: ('http' | 'https' | 'ws' | 'wss')[]
  /** Global MIME types consumed; overridable per operation. */
  consumes?: string[]
  /** Global MIME types produced; overridable per operation. */
  produces?: string[]
  /** Reusable data types (Schema Object). */
  definitions?: Definitions
  /** Reusable parameters; reference with #/parameters/name. */
  parameters?: ParametersDefinitions
  /** Reusable responses; reference with #/responses/name. */
  responses?: ResponsesDefinitions
  /** Security scheme definitions. */
  securityDefinitions?: SecurityDefinitions
  /** API-wide security (OR between entries). */
  security?: SecurityRequirementV2[]
  /** Tag list with metadata. */
  tags?: Tag[]
  /** Additional documentation. */
  externalDocs?: ExternalDocsV2
}

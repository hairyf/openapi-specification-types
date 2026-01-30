import type { AnyObject, Info, SecurityRequirement } from './common'
import type { Definitions, ParametersDefinitions, ResponsesDefinitions, SecurityDefinitions } from './definitions'
import type { PathsV2 } from './paths'
import type { ExternalDocs, Tag } from './tag'

/** Swagger 2.0 root document. Metadata (info, tags, externalDocs, security) uses shared types with OpenAPI 3.x. */
export interface OpenAPISpecificationV2 extends AnyObject {
  /** MUST be "2.0". */
  swagger: '2.0'
  /** API metadata; required. Shared with OpenAPI 3.x (summary/identifier ignored in 2.0). */
  info: Info
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
  /** Reusable data types (Schema). */
  definitions?: Definitions
  /** Reusable parameters; reference with #/parameters/name. */
  parameters?: ParametersDefinitions
  /** Reusable responses; reference with #/responses/name. */
  responses?: ResponsesDefinitions
  /** Security scheme definitions (2.0-only structure). */
  securityDefinitions?: SecurityDefinitions
  /** API-wide security (OR between entries). Shared type with OpenAPI 3.x. */
  security?: SecurityRequirement[]
  /** Tag list with metadata. Shared with OpenAPI 3.x (summary/parent/kind ignored in 2.0). */
  tags?: Tag[]
  /** Additional documentation. Shared with OpenAPI 3.x. */
  externalDocs?: ExternalDocs
}

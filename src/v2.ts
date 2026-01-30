import type { AnyObject, Contact, Info, License } from './common'
import type { Definitions, ParametersDefinitions, ResponsesDefinitions, SecurityDefinitions } from './definitions'
import type { PathsV2, SecurityRequirementV2 } from './paths'
import type { ExternalDocs, Tag } from './tag'

/** Contact (Swagger 2.0) — alias of shared Contact. */
export type ContactV2 = Contact

/** License (Swagger 2.0) — alias of shared License (v2 uses name + url only). */
export type LicenseV2 = License

/** Info (Swagger 2.0) — alias of shared Info. */
export type InfoV2 = Info

/** External Documentation (Swagger 2.0) — alias of shared ExternalDocs. */
export type ExternalDocsV2 = ExternalDocs

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
  externalDocs?: ExternalDocs
}

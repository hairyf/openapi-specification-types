import type { AnyObject, Info, SecurityRequirement } from './common'
import type { Components } from './components'
import type { Paths } from './paths'
import type { Server } from './server'
import type { ExternalDocs, Tag } from './tag'

export type { Contact, Info, License, SecurityRequirement } from './common'

export interface OpenAPISpecificationV3 extends AnyObject {
  /** OAS version (e.g. "3.0.0", "3.2.0"). */
  openapi: string
  /** **REQUIRED**. API metadata. */
  info: Info
  /** Base URI for this document (OpenAPI 3.1+). */
  $self?: string
  /** Default $schema for Schema Objects (OpenAPI 3.1+). */
  jsonSchemaDialect?: string
  /** Connectivity info; default one Server with url: / if absent. */
  servers?: Server[]
  /** Available paths and operations. At least one of paths, webhooks, or components MUST be present. */
  paths?: Paths
  /** Incoming webhooks the consumer MAY implement; key = unique name, value = Path Item (OpenAPI 3.1+). */
  webhooks?: Paths
  /** Reusable objects (schemas, parameters, responses, etc.). */
  components?: Components
  /** API-wide security; OR between entries; operations can override. */
  security?: SecurityRequirement[]
  /** Tags with metadata. */
  tags?: Tag[]
  /** Additional external documentation. */
  externalDocs?: ExternalDocs
}

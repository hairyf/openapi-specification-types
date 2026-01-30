import type { AnyObject } from './common'
import type { Definitions, SecurityDefinitions } from './definitions'
import type { Paths } from './paths'
import type { Tag } from './tag'

export interface OpenAPISpecificationV2 extends AnyObject {
  swagger: string
  host: string
  basePath: string
  schemes: string[]
  consumes: string[]
  info: {
    description: string
    version: string
    title: string
    termsOfService: string
    contact: Record<'name' | 'url' | 'email', string>
    license: Record<'name' | 'url', string>
  }

  paths: Paths
  definitions: Definitions

  securityDefinitions: SecurityDefinitions
  tags: Tag[]
  externalDocs: {
    description: string
    url: string
  }
}

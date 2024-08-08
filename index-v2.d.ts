import { AnyObject } from './common'
import { Tag } from './tag'
import { Paths } from './paths'
import { Definitions, SecurityDefinitions } from './definitions'

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

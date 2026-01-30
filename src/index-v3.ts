import type { AnyObject } from './common'
import type { Components } from './components'
import type { Paths } from './paths'
import type { Server } from './server'
import type { Tag } from './tag'

export interface OpenAPISpecificationV3 extends AnyObject {
  openapi: string
  info: {
    description: string
    version: string
    title: string
    termsOfService: string
    contact: Record<'name' | 'url' | 'email', string>
    license: Record<'name' | 'url', string>
  }
  externalDocs: {
    description: string
    url: string
  }
  servers: Server[]
  tags: Tag[]
  paths: Paths
  components: Components
}

import type { OpenAPISpecificationV2, OpenAPISpecificationV3, Schema } from '../src/index'
import { describe, expect, it } from 'vitest'

describe('openapi-specification-types', () => {
  it('exports OpenAPISpecificationV2 type', () => {
    const v2: OpenAPISpecificationV2 = {
      swagger: '2.0',
      host: 'example.com',
      basePath: '/',
      schemes: ['https'],
      consumes: [],
      info: { description: '', version: '1.0', title: 'API', termsOfService: '', contact: { name: '', url: '', email: '' }, license: { name: '', url: '' } },
      paths: {},
      definitions: {},
      securityDefinitions: {},
      tags: [],
      externalDocs: { description: '', url: '' },
    }
    expect(v2.swagger).toBe('2.0')
  })

  it('exports OpenAPISpecificationV3 type', () => {
    const v3: OpenAPISpecificationV3 = {
      openapi: '3.0.0',
      info: { description: '', version: '1.0', title: 'API', termsOfService: '', contact: { name: '', url: '', email: '' }, license: { name: '', url: '' } },
      externalDocs: { description: '', url: '' },
      servers: [],
      tags: [],
      paths: {},
      components: { schemas: {}, requestBodies: {} },
    }
    expect(v3.openapi).toBe('3.0.0')
  })

  it('exports Schema type', () => {
    const schema: Schema = { type: 'string', description: 'id' }
    expect(schema.type).toBe('string')
  })
})

import type { OpenAPISpecificationV2, OpenAPISpecificationV3, Schema } from '../src/index'

describe('openapi-specification-types', () => {
  it('exports OpenAPISpecificationV2 type', () => {
    const v2: OpenAPISpecificationV2 = {
      swagger: '2.0',
      info: { title: 'API', version: '1.0' },
      paths: {},
    }
    expect(v2.swagger).toBe('2.0')

    const v2Full: OpenAPISpecificationV2 = {
      swagger: '2.0',
      info: { title: 'API', version: '1.0', description: '', termsOfService: '', contact: { name: '', url: '', email: '' }, license: { name: '', url: '' } },
      paths: {},
      host: 'example.com',
      basePath: '/',
      schemes: ['https'],
      consumes: [],
      produces: [],
      definitions: {},
      parameters: {},
      responses: {},
      securityDefinitions: {},
      security: [],
      tags: [],
      externalDocs: { url: 'https://example.com', description: '' },
    }
    expect(v2Full.host).toBe('example.com')
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

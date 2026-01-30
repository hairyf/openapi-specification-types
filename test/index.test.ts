import type {
  OpenAPISpecificationV2,
  OpenAPISpecificationV3,
  Parameter,
  PathItemV2,
  ResponseV2,
  Schema,
  SecurityDefinitions,
  Server,
  Tag,
} from '../src/index'

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

  it('exports Parameter type (query and body)', () => {
    const query: Parameter = {
      name: 'page',
      in: 'query',
      type: 'integer',
      description: 'Page number',
    }
    expect(query.in).toBe('query')

    const body: Parameter = {
      name: 'body',
      in: 'body',
      schema: { type: 'object', properties: { name: { type: 'string' } } },
    }
    expect(body.in).toBe('body')
  })

  it('exports PathItemV2 with operation and responses', () => {
    const okResponse: ResponseV2 = { description: 'OK', schema: { type: 'array', items: { type: 'string' } } }
    const path: PathItemV2 = {
      get: {
        summary: 'List items',
        responses: {
          200: okResponse,
          default: { description: 'Error' },
        },
      },
    }
    const res200 = path.get?.responses[200] as ResponseV2 | undefined
    expect(res200?.description).toBe('OK')
  })

  it('exports ResponseV2', () => {
    const res: ResponseV2 = {
      description: 'Success',
      schema: { type: 'object' },
      headers: { 'X-Request-Id': { type: 'string', description: 'Request ID' } },
    }
    expect(res.description).toBe('Success')
  })

  it('exports Tag and Server', () => {
    const tag: Tag = { name: 'pets', description: 'Pet operations' }
    expect(tag.name).toBe('pets')

    const server: Server = {
      url: 'https://api.example.com',
      description: 'Production',
      variables: {},
    }
    expect(server.url).toBe('https://api.example.com')
  })

  it('exports Definitions and SecurityDefinitions', () => {
    const definitions = {
      User: { type: 'object', properties: { id: { type: 'string' }, name: { type: 'string' } } },
    }
    const v2: OpenAPISpecificationV2 = {
      swagger: '2.0',
      info: { title: 'API', version: '1.0' },
      paths: {},
      definitions: definitions as OpenAPISpecificationV2['definitions'],
    }
    expect(v2.definitions?.User).toBeDefined()

    const securityDefs: SecurityDefinitions = {
      apiKey: { type: 'apiKey', name: 'X-API-Key', in: 'header' },
    }
    expect(securityDefs.apiKey.type).toBe('apiKey')
  })
})

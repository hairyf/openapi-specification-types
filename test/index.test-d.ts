import type {
  OpenAPISpecificationV2,
  OpenAPISpecificationV3,
  Schema,
  SchemaType,
} from '../src/index'

test('OpenAPISpecificationV2 accepts valid root object', () => {
  const v2: OpenAPISpecificationV2 = {
    swagger: '2.0',
    info: { title: 'API', version: '1.0' },
    paths: {},
  }
  expectTypeOf(v2).toMatchTypeOf<OpenAPISpecificationV2>()
  expectTypeOf(v2.swagger).toEqualTypeOf<'2.0'>()
  assertType<OpenAPISpecificationV2>(v2)
})

test('OpenAPISpecificationV2 rejects invalid swagger version', () => {
  const _v2 = {
    swagger: '3.0',
    info: { title: 'API', version: '1.0' },
    paths: {},
  }
  // @ts-expect-error swagger must be "2.0"
  assertType<OpenAPISpecificationV2>(_v2)
})

test('OpenAPISpecificationV3 accepts valid root object', () => {
  const v3: OpenAPISpecificationV3 = {
    openapi: '3.0.0',
    info: {
      title: 'API',
      version: '1.0',
      description: '',
      termsOfService: '',
      contact: { name: '', url: '', email: '' },
      license: { name: '', url: '' },
    },
    externalDocs: { description: '', url: '' },
    servers: [],
    tags: [],
    paths: {},
    components: { schemas: {}, requestBodies: {} },
  }
  expectTypeOf(v3).toMatchTypeOf<OpenAPISpecificationV3>()
  assertType<OpenAPISpecificationV3>(v3)
})

test('Schema accepts valid fields', () => {
  const schema: Schema = { type: 'string', description: 'id' }
  expectTypeOf(schema).toMatchTypeOf<Schema>()
  expectTypeOf(schema.type).toEqualTypeOf<SchemaType | SchemaType[] | undefined>()
  assertType<Schema>(schema)
})

test('Schema.type only accepts SchemaType literals', () => {
  const _schema = { type: 'invalid', description: 'x' }
  // @ts-expect-error type must be SchemaType
  assertType<Schema>(_schema)
})

import type {
  OpenAPISpecificationV2,
  OpenAPISpecificationV3,
  Parameter,
  PathItemV2,
  Reference,
  Schema,
  SchemaType,
  Server,
  Tag,
} from '../src/index'
import { assertType, expectTypeOf, test } from 'vitest'

test('OpenAPISpecificationV2 accepts valid root object', () => {
  const v2: OpenAPISpecificationV2 = {
    swagger: '2.0',
    info: { title: 'API', version: '1.0' },
    paths: {},
  }
  expectTypeOf(v2).toExtend<OpenAPISpecificationV2>()
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
  expectTypeOf(v3).toExtend<OpenAPISpecificationV3>()
  assertType<OpenAPISpecificationV3>(v3)
})

test('Schema accepts valid fields', () => {
  const schema: Schema = { type: 'string', description: 'id' }
  expectTypeOf(schema).toExtend<Schema>()
  expectTypeOf(schema.type).toEqualTypeOf<SchemaType | SchemaType[] | undefined>()
  assertType<Schema>(schema)
})

test('Schema.type only accepts SchemaType literals', () => {
  const _schema = { type: 'invalid', description: 'x' }
  // @ts-expect-error type must be SchemaType
  assertType<Schema>(_schema)
})

test('Parameter accepts valid in and type', () => {
  const query: Parameter = { name: 'q', in: 'query', type: 'string' }
  expectTypeOf(query.in).toEqualTypeOf<'body' | 'header' | 'query' | 'path' | 'formData'>()
  assertType<Parameter>(query)

  const body: Parameter = { name: 'body', in: 'body', schema: { type: 'object' } }
  assertType<Parameter>(body)
})

test('Parameter rejects invalid in', () => {
  const _param = { name: 'x', in: 'cookie', type: 'string' }
  // @ts-expect-error in must be body | header | query | path | formData
  assertType<Parameter>(_param)
})

test('Tag requires name', () => {
  const tag: Tag = { name: 'pets', description: 'Pet API' }
  expectTypeOf(tag).toExtend<Tag>()
  expectTypeOf(tag.name).toEqualTypeOf<string>()
  assertType<Tag>(tag)
})

test('Reference is $ref only', () => {
  const ref: Reference = { $ref: '#/definitions/User' }
  expectTypeOf(ref).toExtend<Reference>()
  expectTypeOf(ref.$ref).toEqualTypeOf<string>()
  assertType<Reference>(ref)
})

test('Server requires url and variables', () => {
  const server: Server = { url: 'https://api.example.com', description: '', variables: {} }
  expectTypeOf(server.url).toEqualTypeOf<string>()
  assertType<Server>(server)
})

test('PathItemV2 accepts operation with responses', () => {
  const path: PathItemV2 = {
    get: {
      summary: 'List',
      responses: {
        200: { description: 'OK' },
      },
    },
  }
  expectTypeOf(path).toExtend<PathItemV2>()
  assertType<PathItemV2>(path)
})

test('Schema accepts items, properties, enum', () => {
  const schema: Schema = {
    type: 'object',
    properties: { id: { type: 'string' }, count: { type: 'integer' } },
    required: ['id'],
  }
  assertType<Schema>(schema)

  const arraySchema: Schema = { type: 'array', items: { type: 'string' } }
  assertType<Schema>(arraySchema)

  const enumSchema: Schema = { type: 'string', enum: ['a', 'b'] }
  assertType<Schema>(enumSchema)
})

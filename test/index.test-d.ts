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
  const v3Minimal: OpenAPISpecificationV3 = {
    openapi: '3.2.0',
    info: { title: 'API', version: '1.0' },
    paths: {},
  }
  expectTypeOf(v3Minimal).toExtend<OpenAPISpecificationV3>()
  assertType<OpenAPISpecificationV3>(v3Minimal)

  const v3Full: OpenAPISpecificationV3 = {
    openapi: '3.0.0',
    info: {
      title: 'API',
      version: '1.0',
      summary: 'Summary',
      contact: { name: 'Support', url: 'https://example.com', email: 'a@b.com' },
      license: { name: 'Apache 2.0', identifier: 'Apache-2.0' },
    },
    externalDocs: { url: 'https://example.com/docs' },
    servers: [{ url: 'https://api.example.com' }],
    tags: [{ name: 'pets' }],
    paths: {},
    components: { schemas: {}, requestBodies: {} },
  }
  assertType<OpenAPISpecificationV3>(v3Full)
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
  expectTypeOf(query.in).toEqualTypeOf<'body' | 'header' | 'query' | 'path' | 'formData' | 'cookie' | 'querystring'>()
  assertType<Parameter>(query)

  const cookie: Parameter = { name: 'session', in: 'cookie', type: 'string' }
  assertType<Parameter>(cookie)

  const body: Parameter = { name: 'body', in: 'body', schema: { type: 'object' } }
  assertType<Parameter>(body)
})

test('Parameter rejects invalid in', () => {
  const _param = { name: 'x', in: 'invalid', type: 'string' }
  // @ts-expect-error in must be body | header | query | path | formData | cookie | querystring
  assertType<Parameter>(_param)
})

test('Tag requires name', () => {
  const tag: Tag = { name: 'pets', description: 'Pet API' }
  expectTypeOf(tag).toExtend<Tag>()
  expectTypeOf(tag.name).toEqualTypeOf<string>()
  assertType<Tag>(tag)
})

test('Reference has $ref; summary/description optional (OpenAPI 3.x)', () => {
  const ref: Reference = { $ref: '#/definitions/User' }
  expectTypeOf(ref).toExtend<Reference>()
  expectTypeOf(ref.$ref).toEqualTypeOf<string>()
  assertType<Reference>(ref)

  const refWithOverride: Reference = {
    $ref: '#/components/schemas/Pet',
    summary: 'A pet',
    description: 'Override description',
  }
  assertType<Reference>(refWithOverride)
})

test('Server requires url only', () => {
  const server: Server = { url: 'https://api.example.com' }
  expectTypeOf(server.url).toEqualTypeOf<string>()
  assertType<Server>(server)

  const serverFull: Server = {
    url: 'https://{env}.example.com',
    description: 'API server',
    variables: { env: { default: 'api' } },
  }
  assertType<Server>(serverFull)
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

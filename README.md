# openapi-specification-types

TypeScript type definitions for [OpenAPI (Swagger) 2.0](https://swagger.io/specification/v2/) and [OpenAPI 3.x](https://spec.openapis.org/oas/v3.2.0) specifications.

## Install

```bash
pnpm add openapi-specification-types
# or
npm i openapi-specification-types
```

## Usage

```ts
import type {
  OpenAPISpecificationV2,
  OpenAPISpecificationV3,
  Parameter,
  Paths,
  Schema,
  Tag,
} from 'openapi-specification-types'

// OpenAPI 2.0 (Swagger) — required: swagger, info (title, version), paths
const v2: OpenAPISpecificationV2 = {
  swagger: '2.0',
  info: { title: 'API', version: '1.0' },
  paths: {},
}

// OpenAPI 3.x — required: openapi, info, externalDocs, servers, tags, paths, components
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
```

## Exported types

- **OpenAPI 2.0**: `OpenAPISpecificationV2`, `InfoV2`, `ContactV2`, `LicenseV2`, `ExternalDocsV2`, `Definitions`, `SecurityDefinitions`, `PathsV2`, etc.
- **OpenAPI 3.x**: `OpenAPISpecificationV3`, `Components`, `Server`, `RequestBody`, `SecurityScheme`, etc.
- **Shared**: `Schema`, `Paths`, `Parameter`, `Tag`, `Method`, `Responses`, `RequestBody`, `AnyObject`, etc.

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm run typecheck` | TypeScript type check |
| `pnpm run test` | Run Vitest (runtime + type tests) |
| `pnpm run lint` | Run ESLint |

## Testing

Tests include:

- **Runtime tests** (`test/*.test.ts`): value checks with Vitest.
- **Type tests** (`test/*.test-d.ts`): compile-time checks with `expectTypeOf` / `assertType`; run via `pnpm test` (uses `vitest --typecheck`).

## License

ISC

# AGENTS

<skills_system priority="1">

## Available Skills

<!-- SKILLS_TABLE_START -->
<usage>
When users ask you to perform tasks, check if any of the available skills below can help complete the task more effectively. Skills provide specialized capabilities and domain knowledge.

How to use skills:
- Invoke: `npx openskills read <skill-name>` (run in your shell)
  - For multiple: `npx openskills read skill-one,skill-two`
- The skill content will load with detailed instructions on how to complete the task
- Base directory provided in output for resolving bundled resources (references/, scripts/, assets/)

Usage notes:
- Only use skills listed in <available_skills> below
- Do not invoke a skill that is already loaded in your context
- Each skill invocation is stateless
</usage>

<available_skills>

<skill>
<name>arch-tsdown</name>
<description>TypeScript library starter using tsdown. Use when scaffolding or maintaining a TS/ESM library with tsdown, pnpm, Vitest, and npm Trusted Publisher.</description>
<location>project</location>
</skill>

<skill>
<name>openapi-specification-v2</name>
<description>OpenAPI (Swagger) 2.0 specification for describing REST APIs. Use when writing, validating, or interpreting Swagger 2.0 specs, generating clients/docs, or working with path/operation/parameter/response/schema/security definitions.</description>
<location>project</location>
</skill>

<skill>
<name>openapi-specification-v3.2</name>
<description>OpenAPI Specification 3.2 — write and interpret OpenAPI descriptions (OAD), paths, operations, parameters, request/response, schema (JSON Schema 2020-12), security, and extensions. Use when authoring or validating OpenAPI 3.2 documents.</description>
<location>project</location>
</skill>

<skill>
<name>pnpm</name>
<description>Node.js package manager with strict dependency resolution. Use when running pnpm specific commands, configuring workspaces, or managing dependencies with catalogs, patches, or overrides.</description>
<location>project</location>
</skill>

<skill>
<name>tsdown</name>
<description>tsdown fast TypeScript library bundler powered by Rolldown and Oxc. Use when bundling TypeScript libraries, configuring entry points, or generating .d.ts declaration files.</description>
<location>project</location>
</skill>

</available_skills>
<!-- SKILLS_TABLE_END -->

</skills_system>

import type { Properties, Schema } from './schema'

export interface Definition {
  type: Schema['type']
  properties: Properties
  required: string[]
}

export interface Definitions {
  [name: string]: Definition
}

export interface SecurityDefinitionScheme {
  type: string
  name?: string
  in?: string
  authorizationUrl?: string
  flow?: string
  scopes?: Record<string, string>
}

export interface SecurityDefinitions {
  [name: string]: SecurityDefinitionScheme
}

import { RequestBody } from './body'
import { StringObject } from './common'
import { Definitions } from './definitions'

export interface Components {
  schemas: Definitions
  requestBodies: RequestBodies
}

export interface RequestBodies {
  [name: string]: RequestBody
}

export interface SecuritySchemes {
  [name: string]: SecurityScheme
}

export interface SecurityScheme {
  type: 'apiKey' | 'http' | 'oauth2' | 'openIdConnect'
  description: string
  name: string
  in: 'query' | 'header' | 'cookie'
  scheme: string
  bearerFormat: string
  flows: {
    implicit: OAuthFlow
    password: OAuthFlow
    clientCredentials: OAuthFlow
    authorizationCode: OAuthFlow
  }
  openIdConnectUrl: string
}

export interface OAuthFlow {
  authorizationUrl: string
  tokenUrl: string
  refreshUrl: string
  scopes: StringObject
}

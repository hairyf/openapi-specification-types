/** External Documentation Object — url required when present (Swagger 2.0 / OpenAPI 3). */
export interface ExternalDocs {
  url: string
  description?: string
}

export interface Tag {
  name: string
  description?: string
  externalDocs?: ExternalDocs
}

/** External Documentation Object — url required when present (Swagger 2.0 / OpenAPI 3). */
export interface ExternalDocs {
  url: string
  description?: string
}

/** Tag Object — metadata for tag used by Operation (OpenAPI 3.x). */
export interface Tag {
  /** **REQUIRED**. Tag name; use in Operation's tags array. */
  name: string
  /** Short summary for display (OpenAPI 3.1+). */
  summary?: string
  description?: string
  externalDocs?: ExternalDocs
  /** name of a tag this tag is nested under (OpenAPI 3.1+). */
  parent?: string
  /** Machine-readable category e.g. nav, badge, audience (OpenAPI 3.1+). */
  kind?: string
}

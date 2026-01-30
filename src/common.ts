export interface StringObject { [key: string]: string }
export interface AnyObject { [key: string]: any }

/** JSON Reference — used for $ref in Swagger 2.0 / OpenAPI (parameter, response, path, schema). */
export interface Reference {
  $ref: string
}

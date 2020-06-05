export type Servable =
  | string
  | number
  | bigint
  | boolean
  | symbol
  | {}
  | Function
  | undefined
  | null;

export type HttpMethod =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'PATCH'
  | 'DELETE'
  | 'OPTIONS'
  | 'HEAD'
  | 'TRACE'
  | 'CONNECT';

import { IncomingMessage, ServerResponse } from 'http';

export type ServableHandler = (
  req: IncomingMessage,
  res: ServerResponse,
) => Servable;

export type Servable =
  | string
  | number
  | bigint
  | boolean
  | symbol
  | Record<string, unknown>
  | ServableHandler
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

import { WELCOMING_NO_CONTENT } from './constants';
import { createServer, RequestListener, Server } from 'http';

type Config = {
  readonly port: number;
  readonly hostname: string;
  readonly welcomingNoContent: boolean;
};

const defaultConfig: Config = {
  port: 4242,
  hostname: '0.0.0.0',
  welcomingNoContent: true,
};

type Servable =
  | string
  | number
  | bigint
  | boolean
  | symbol
  | {}
  | Function
  | undefined
  | null;

export const serve = (
  something: Servable,
  config?: Partial<Config>,
): Server => {
  const finalConfig: Config = { ...defaultConfig, ...config };

  const handler = (something: Servable): RequestListener => {
    if (typeof something === 'function') {
      return (req, res) => something(req, res);
    }

    return (req, res) => {
      if (something instanceof Object) {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify(something));
      }

      if (
        typeof something === 'string' ||
        typeof something === 'number' ||
        typeof something === 'bigint' ||
        typeof something === 'boolean' ||
        typeof something === 'symbol'
      ) {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end(something);
      }

      if (finalConfig.welcomingNoContent) {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end(WELCOMING_NO_CONTENT);
      } else {
        res.writeHead(204);
        res.end('No Content');
      }
    };
  };

  return createServer(handler(something)).listen(
    finalConfig.port,
    finalConfig.hostname,
    () => {
      console.log(
        `Listening on http://${finalConfig.hostname}:${finalConfig.port}`,
      );
    },
  );
};

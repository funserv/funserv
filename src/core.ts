import { Config, computeConfig } from './config';
import { WELCOMING_NO_CONTENT } from './constants';
import { Servable } from './types';
import { RequestListener, createServer, Server, ServerResponse } from 'http';

export const configureAndCreateServer = (
  handler: (config: Config) => RequestListener,
  config?: Partial<Config>,
): Server => {
  const finalConfig = computeConfig(config);

  return createServer(handler(finalConfig)).listen(
    finalConfig.port,
    finalConfig.hostname,
    () => {
      console.log(
        `Listening on http://${finalConfig.hostname}:${finalConfig.port}`,
      );
    },
  );
};

export const answer = (
  something: Servable,
  res: ServerResponse,
  config: Config,
  // eslint-disable-next-line functional/no-return-void
): void => {
  if (something instanceof Object) {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify(something));
    return;
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
    return;
  }

  if (config.welcomingNoContent) {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end(WELCOMING_NO_CONTENT);
    return;
  }

  res.writeHead(204);
  res.end('No Content');
};

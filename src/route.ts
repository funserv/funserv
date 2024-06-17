import { Config } from './config';
import { configureAndCreateServer, answer } from './core';
import { Servable, HttpMethod } from './types';
import { Server, RequestListener } from 'http';

type Route = readonly [HttpMethod, string, Servable];

const handler =
  (routes: readonly Route[]) =>
  (config: Config): RequestListener => {
    return (req, res) => {
      const route = routes.find(
        (route) => route[0] === req.method && route[1] === req.url,
      );

      if (route !== undefined) {
        return answer(route[2], res, config);
      } else {
        return answer(undefined, res, config);
      }
    };
  };

export const route = (
  routes: readonly Route[],
  config?: Partial<Config>,
): Server => configureAndCreateServer(handler(routes), config);

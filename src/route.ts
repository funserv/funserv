import { Config } from './config';
import { configureAndCreateServer } from './core';
import { handleServable } from './handleServable';
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

      return handleServable(route?.[2])(config)(req, res);
    };
  };

export const route = (
  routes: readonly Route[],
  config?: Partial<Config>,
): Server => configureAndCreateServer(handler(routes), config);

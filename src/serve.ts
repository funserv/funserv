import { Config } from './config';
import { configureAndCreateServer, answer } from './core';
import { Servable } from './types';
import { Server, RequestListener } from 'http';

const serveHandler =
  (something: Servable) =>
  (config: Config): RequestListener => {
    if (typeof something === 'function') {
      return (req, res) => something(req, res);
    }

    return (req, res) => answer(something, res, config);
  };

export const serve = (something: Servable, config?: Partial<Config>): Server =>
  configureAndCreateServer(serveHandler(something), config);

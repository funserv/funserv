import { Config } from './config';
import { answer } from './core';
import { isServableHandler } from './typeguards';
import { Servable } from './types';
import { RequestListener } from 'http';

export const handleServable =
  (something: Servable) =>
  (config: Config): RequestListener => {
    if (isServableHandler(something)) {
      return (req, res) =>
        handleServable(something(req, res))(config)(req, res);
    }

    return (_, res) => answer(something, res, config);
  };

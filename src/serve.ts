import { Config } from './config';
import { configureAndCreateServer } from './core';
import { handleServable } from './handleServable';
import { Servable } from './types';
import { Server } from 'http';

export const serve = (something: Servable, config?: Partial<Config>): Server =>
  configureAndCreateServer(handleServable(something), config);

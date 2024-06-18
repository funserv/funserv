import { ServableHandler, Servable } from './types';

export const isServableHandler = (
  something: Servable,
): something is ServableHandler => typeof something === 'function';

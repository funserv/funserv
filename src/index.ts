import { route } from './router';
import { serve } from './server';

serve(undefined, { port: 4242 });

route([
  ['GET', '/', 'Hello World'],
  ['GET', '/numbers', [1, 2, 3]],
]);

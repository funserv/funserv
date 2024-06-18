import { serve } from '../src/serve';
// import { route } from '../src/route';

serve(() => ({
  hello: 'world',
}));

// This also works using `route`
// route([['GET', '/', () => ({ hello: 'world' })]]);

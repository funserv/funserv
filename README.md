## funserv

`funserv` aims to offer a simple and intuitive layer of abstraction over node `http` module using 2 simple functions `serve()` and `route()`.

_Disclaimer: This package is meant to be used in a TypeScript project. Feel free to contribute if you want to support JS projects._

### Usage

```typescript
import { route } from 'funserv';
import { serve } from 'funserv';

serve(undefined, { port: 4242 });

route([
  ['GET', '/', 'Hello World'],
  ['GET', '/numbers', [1, 2, 3]],
]);
```

### Why

Yet another web framework? Actually no. It's not meant to be a framework. Serving content should be as easy as the example above and you should not need a framework to do that.

Most of NPM packages available (and maintained) are either big frameworks, object-oriented or lack typings for Typescript.

`funserv` is meant to be:

- TypeScript first-class
- Functional
- Minimal

## TS Server

`ts-server` aims to offer a simple and intuitive layer of abstraction over node `http` module.

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

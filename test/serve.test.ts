/* eslint-disable jest/no-test-callback */
/* eslint-disable @typescript-eslint/promise-function-async */
import { serve } from '../src/serve';
import request from 'supertest';

describe('serve()', () => {
  it('serve(undefined) should return 200', (done) =>
    request(serve(undefined)).get('/').expect(200, done));

  it('serve(Hello World) should return 200', (done) =>
    request(serve('Hello World')).get('/').expect(200, 'Hello World', done));
});

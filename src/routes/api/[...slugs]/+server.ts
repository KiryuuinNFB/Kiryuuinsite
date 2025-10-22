import { Elysia, t } from 'elysia';

const app = new Elysia({ prefix: '/api' })
  .get('/', () => 'hello world')
  .get('/hi', () => 'hi')
  .post(
    '/',
    ({ body }) => body,
    { body: t.Object({ name: t.String() }) }
  );
type RequestHandler = (v: { request: Request }) => Response | Promise<Response>;
export const fallback: RequestHandler = ({ request }) => app.handle(request);
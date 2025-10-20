import { Elysia } from 'elysia';
import { openapi } from '@elysiajs/openapi'

const app = new Elysia({prefix: "/api"})
    .use(openapi({path: "/api/openapi"}))
    .get('/', () => 'hello world')

type RequestHandler = (v: { request: Request }) => Response | Promise<Response>

export const fallback: RequestHandler = ({ request }) => app.handle(request)
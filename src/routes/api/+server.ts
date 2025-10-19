import { Elysia } from 'elysia';

const app = new Elysia({prefix: "/api"})
    .get('/', () => 'skibidi')

type RequestHandler = (v: { request: Request }) => Response | Promise<Response>

export const fallback: RequestHandler = ({ request }) => app.handle(request)
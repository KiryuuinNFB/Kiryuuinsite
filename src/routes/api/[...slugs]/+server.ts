import { Elysia, t } from 'elysia';
import { openapi } from '@elysiajs/openapi'
import { PrismaClient } from "@prisma/client";
import { logger } from "@tqman/nice-logger";

const prisma = new PrismaClient()

const app = new Elysia({ prefix: '/api' })
    .use(openapi())
    .use(logger())
    .get('/', () => "You found this page. Kiryuuin won't be happy if you go to /api/openapi")
    .group('/cms', app => 
        app
            .get('/', async () => {
                const allcms = await prisma.commission.findMany()

                return allcms
            })
            .put('/', async ({ body }) => {
                const { status, notes } = body;
                const cms = await prisma.commission.create({
                    data: {
                        status,
                        notes
                    }
                })

                return {
                    id: cms.id,
                    status: cms.status,
                    notes: cms.notes
                }
            }, {
                body: t.Object({
                    status: t.Optional(t.Enum({
                        Queued: 'Queued',
                        Working: 'Working',
                        Finished: 'Finished'
                    })),
                    notes: t.String()
                })
            })
            .patch('/', async ({ body }) => {
                const { id, status, notes } = body;
                const cms = await prisma.commission.update({
                    where: {
                        id: id
                    },
                    data: {
                        status,
                        notes
                    }
                })

                return {
                    id: cms.id,
                    status: cms.status,
                    notes: cms.notes
                }
            }, {
                body: t.Object({
                    id: t.Number(),
                    status: t.Optional(t.Enum({
                        Queued: 'Queued',
                        Working: 'Working',
                        Finished: 'Finished'
                    })),
                    notes: t.String()
                })
            })
            .delete('/', async ({ body }) => {
                const { id } = body;
                const cms = await prisma.commission.delete({
                    where: {
                        id: id
                    }
                })

                return {
                    id: cms.id
                }
            }, {
                body: t.Object({
                    id: t.Number()
                })
            })
    )
type RequestHandler = (v: { request: Request }) => Response | Promise<Response>;
export const fallback: RequestHandler = ({ request }) => app.handle(request);
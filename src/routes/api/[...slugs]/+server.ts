import { Elysia, status, t, file } from 'elysia';
//import { openapi } from '@elysiajs/openapi'
import { PrismaClient } from "@prisma/client";
import { logger } from "@tqman/nice-logger";
import { jwt } from '@elysiajs/jwt'

const prisma = new PrismaClient()

const app = new Elysia({ prefix: '/api' })
    //.use(openapi())
    .use(logger())
    .use(
        jwt({
            name: 'jwt',
            secret: "PLEASE_CHANGE_THIS_IN_VPS"
        })
    )
    .get('/', () => "You found this page. Kiryuuin is gonna cry if you go to /api/swagger")
    .get('/swagger', () => file("sadkiryuuin.png"))
    .group('/comstat', app =>
        app
            .get('/', async () => {
                const allcms = await prisma.comstat.findFirst()

                return allcms
            })
            
    )
    .get('/commissions', async () => {
        const allcms = await prisma.commission.findMany()

        return allcms
    })
    .group('/cms', app =>
        app
            .guard({
                beforeHandle: async ({ jwt, headers, status }) => {
                    const auth = headers.authorization
                    if (!auth) {
                        return status(401, "Unauthorized")
                    }
                    const decoded = await jwt.verify(auth)
                    if (!decoded) {
                        return status(401, "Unauthorized")
                    }
                }
            })

            .get('/:id', async ({ params }) => {
                const { id } = params as { id: string };

                const cms = await prisma.commission.findUnique({
                    where: {
                        id: Number(id)
                    }
                })

                return cms
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
            .delete('/purge', async () => {
                await prisma.commission.deleteMany()
                await prisma.$executeRawUnsafe(`DELETE FROM sqlite_sequence WHERE name='Commission';`);

                return "Purged"
            })
            .post('/', async ({ body }) => {
                const { status } = body;
                const stat = await prisma.comstat.upsert({
                    where: {
                        id: 1
                    },
                    update: {
                        isOpen: status,
                    },
                    create: {
                        id: 1,
                        isOpen: status,
                    }
                });

                return {
                    status: stat.isOpen
                }
            }, {
                body: t.Object({
                    status: t.Boolean()
                })
            })
    )
    .group('/auth', app =>
        app
            .post('login', async ({ jwt, body, cookie: { auth } }) => {
                const { username, password } = body;
                //const hashed = await Bun.password.hash(password, { algorithm: "argon2id", memoryCost: 64 * 1024, timeCost: 3 })
                const isUser = await Bun.password.verify(username, "$argon2id$v=19$m=65536,t=3,p=1$CM+OyxW8Hf36vtHncccVYMKcirnERbMi3sVJZqbL26I$oD9ovostRkvPkfTq0ezZASRHIIJ+vHpv53z6Wls2j7g")
                const isMatch = await Bun.password.verify(password, "$argon2id$v=19$m=65536,t=3,p=1$bTfNNSuxyMyJ1xqYK+OUaiPaafP/ddTvZIKA5NKXi6A$ahi/FlPMCcFzkVhVkcADzn4PkmyXJD/rTgzxpkdJsu0")
                if (!isMatch || !isUser) {
                    return status(401, 'Forbidden')
                }

                if (isMatch && isUser) {
                    const value = await jwt.sign({ username: username, exp: "30min" })

                    auth.set({
                        value,
                        httpOnly: true,
                        maxAge: 60 * 30,
                        path: '/',
                    })

                }

            }, {
                body: t.Object({
                    username: t.String(),
                    password: t.String()
                },
                    {
                        error: "Invalid credentials"
                    })
            }))

type RequestHandler = (v: { request: Request }) => Response | Promise<Response>;
export const fallback: RequestHandler = ({ request }) => app.handle(request);
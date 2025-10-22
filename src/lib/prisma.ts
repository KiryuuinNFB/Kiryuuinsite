import { PrismaClient } from '../../node_modules/.prisma/client/client.js';
import { DATABASE_URL } from '$env/static/private';

const prisma = new PrismaClient({
	datasourceUrl: DATABASE_URL
});

export default prisma;
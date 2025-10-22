FROM oven/bun:1.1

WORKDIR /app

COPY package.json package.json
COPY bun.lock bun.lock

COPY prisma ./prisma
COPY src ./src


RUN bun install
RUN bunx prisma generate --schema=./prisma/schema.prisma

COPY . .
RUN bun run build

WORKDIR /app
ENV PORT=5173
EXPOSE 5173
CMD ["bun", "node", "build"]
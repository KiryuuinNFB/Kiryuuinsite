FROM oven/bun:1.1

WORKDIR /app

COPY package.json package.json
COPY bun.lock bun.lock

RUN bun install

COPY . .
RUN bun run build

WORKDIR /app
ENV PORT=5173
EXPOSE 5173
CMD ["bun", "node", "build"]
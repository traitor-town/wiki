FROM oven/bun:1.3.1-slim AS base
WORKDIR /app

# By copying only the package.json and package-lock.json here, we ensure that the following `-deps` steps are independent of the source code.
# Therefore, the `-deps` steps will be skipped if only the source code changes.
COPY package.json bun.lock ./

FROM oven/bun:1.3.1-slim AS prod-deps
RUN bun install --production

FROM oven/bun:1.3.1-slim AS build-deps
RUN bun install

FROM oven/bun:1.3.1-slim AS build
COPY . .
RUN bun run build

FROM node:lts AS runtime
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD ["node", "./dist/server/entry.mjs"]
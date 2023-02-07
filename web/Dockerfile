FROM node:lts-alpine AS builder

ARG NEXT_PUBLIC_API="https://localhost/graphql"

WORKDIR /opt/app
COPY . .
RUN yarn install
RUN yarn build

# Production image, copy all the files and run next
FROM node:lts-alpine AS runner

ARG X_TAG
WORKDIR /opt/app
ENV NODE_ENV=production
ENV PORT=80
COPY --from=builder /opt/app/next.config.js ./
COPY --from=builder /opt/app/public ./public
COPY --from=builder /opt/app/.next ./.next
COPY --from=builder /opt/app/node_modules ./node_modules
CMD ["node_modules/.bin/next", "start"]
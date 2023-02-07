FROM node:lts-alpine AS builder

# Create app directory
WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./
COPY prisma ./prisma/

# Install app dependencies
RUN yarn

COPY . .

RUN yarn generate
RUN yarn build

FROM node:lts-alpine

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/dist ./dist

ENV PORT=80
CMD [ "yarn", "start" ]
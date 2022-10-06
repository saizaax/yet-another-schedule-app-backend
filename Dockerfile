# Install dependencies
FROM node:17-alpine as dependencies
WORKDIR /schedule-backend

COPY package.json package-lock.json* ./
COPY prisma ./prisma/

RUN npm i -g typescript
RUN npm ci
RUN npx prisma generate

# Build
FROM node:17-alpine as builder
WORKDIR /schedule-backend

COPY . .
COPY --from=dependencies /schedule-backend/node_modules ./node_modules
COPY --from=dependencies /schedule-backend/prisma ./prisma/

RUN npm run build

# Run
FROM node:17-alpine as runner
WORKDIR /schedule-backend

ENV NODE_ENV production

COPY --from=builder /schedule-backend/dist ./dist
COPY --from=builder /schedule-backend/prisma ./prisma/
COPY --from=builder /schedule-backend/package.json ./package.json
COPY --from=builder /schedule-backend/node_modules ./node_modules

EXPOSE 8000

CMD ["npm", "run", "start:prod:migrate"]
FROM node:16.13.2-alpine as build
#env
ENV NODE_ENV=development
ENV PORT=2727

WORKDIR /app

COPY package*.json .
RUN npm install

COPY . .
RUN npm run build

# ------------------production -------------------

FROM node:16.13.2-alpine as production
#env
ENV NODE_ENV=production
ENV PORT=2727

WORKDIR /app

COPY package*.json .
RUN npm ci --only=production

COPY --from=build /app/dist ./dist

CMD [ "node","dist/app.js" ]

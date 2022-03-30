FROM node:16.13.2-alpine as build

WORKDIR /app

COPY package*.json .
RUN npm install

COPY . .
RUN npm run build

# ------------------production -------------------
FROM nginx:1.21.6-alpine as production

WORKDIR /usr/share/nginx/html

COPY --from=build /app/dist .

# CMD [ "nginx" ]
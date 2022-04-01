FROM node:16.13.2-alpine as build

WORKDIR /app

COPY package*.json .
RUN npm install

COPY . .

USER milon27:milon27
# RUN npm run build
CMD [ "npm","run","build" ]

# ------------------production -------------------
# FROM nginx:stable-alpine as production

# WORKDIR /usr/share/nginx/html

# COPY --from=build /app/dist .

# CMD [ "nginx" ]
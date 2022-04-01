FROM node:16.13.2-alpine as build

# RUN adduser -D -g '' milon27
# RUN adduser milon27 root
# USER milon27

WORKDIR /app

COPY package*.json .
RUN npm install

COPY . .

# RUN npm run build
CMD [ "npm","run","build" ]

# ------------------production -------------------
# FROM nginx:stable-alpine as production

# WORKDIR /usr/share/nginx/html

# COPY --from=build /app/dist .

# CMD [ "nginx" ]
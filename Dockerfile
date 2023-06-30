FROM docker.io/node:18-alpine AS builder
COPY . /nuxt
WORKDIR /nuxt
RUN yarn install

EXPOSE 3000
EXPOSE 80

CMD [ "yarn", "dev" ]
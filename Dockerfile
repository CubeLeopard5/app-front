FROM docker.io/node:18-alpine AS builder
COPY . /app-front
WORKDIR /app-front
RUN yarn install

EXPOSE 3000
EXPOSE 24678

ENV BACKEND_ADDR=http://localhost:8000

RUN yarn build

CMD [ "node", ".output/server/index.mjs" ]
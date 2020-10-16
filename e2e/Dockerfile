FROM node:erbium-alpine

WORKDIR /home/node

COPY ./package*.json ./

RUN npm ci

COPY ./jest.config.json .
COPY ./setupTests.ts .
COPY ./tsconfig*.json ./
COPY ./e2e ./e2e

ENTRYPOINT [ "npm" ]

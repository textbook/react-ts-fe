FROM node:erbium-alpine AS build

COPY ./package.json .
COPY ./package-lock.json .

RUN npm ci

COPY ./Staticfile .
COPY ./tsconfig.json .
COPY ./src /src
COPY ./webpack /webpack

RUN npm run build

FROM nginx:stable-alpine

COPY --from=build ./dist /usr/share/nginx/html

COPY ./default.conf /etc/nginx/conf.d

FROM node:erbium-alpine AS build

WORKDIR /home/node

COPY ./package*.json ./

RUN npm ci --only=prod

COPY ./Staticfile .
COPY ./tsconfig.json .
COPY ./src ./src
COPY ./webpack ./webpack

RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /home/node/dist /usr/share/nginx/html

COPY ./default.conf /etc/nginx/conf.d

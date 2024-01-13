FROM node:18-alpine as build

WORKDIR /src

COPY package.json yarn.lock ./
RUN yarn install --development

COPY . .
RUN yarn build

FROM node:18-alpine as final

WORKDIR /app
EXPOSE 3000

COPY package.json yarn.lock ./
RUN yarn install --production
COPY --from=build dist ./dist/

ENTRYPOINT [ "node", "dist/src/main.js" ]

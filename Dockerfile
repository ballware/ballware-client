FROM node:18-bullseye as build-deps
ENV NODE_OPTIONS=--openssl-legacy-provider
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
COPY lerna.json ./
RUN yarn set version 1.18.0
RUN yarn install
COPY . ./
WORKDIR /usr/src/app/apps/webclient
RUN yarn build

FROM nginx:stable-alpine

RUN apk update \
 && apk add jq \
 && rm -rf /var/cache/apk/*

COPY --from=build-deps /usr/src/app/apps/webclient/build /var/www
COPY apps/webclient/nginx.conf /etc/nginx/nginx.conf
COPY apps/webclient/localhost.pem /etc/nginx/localhost.pem
COPY apps/webclient/localhost-key.pem /etc/nginx/localhost-key.pem

COPY apps/webclient/docker-entrypoint.sh /
RUN chmod a+rx /docker-entrypoint.sh
EXPOSE 80
EXPOSE 443

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
FROM node:12.20 as build-deps
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:stable-alpine

RUN apk update \
 && apk add jq \
 && rm -rf /var/cache/apk/*

COPY --from=build-deps /usr/src/app/build /var/www
COPY nginx.conf /etc/nginx/nginx.conf
COPY docker-entrypoint.sh /
RUN chmod a+rx /docker-entrypoint.sh
EXPOSE 80

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
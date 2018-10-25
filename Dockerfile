FROM node AS build-env

WORKDIR /usr/local/app
COPY package*.json /usr/local/app/
RUN npm install
COPY public /usr/local/app/public
COPY src /usr/local/app/src
RUN npm run build

FROM nginx:alpine
COPY --from=build-env /usr/local/app/build /usr/share/nginx/html

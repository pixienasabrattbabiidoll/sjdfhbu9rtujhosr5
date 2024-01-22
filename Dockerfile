FROM node:16-alpine

# included to run liveness probe
RUN apk --no-cache add curl

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ] ; then echo "Debug mode enabled. Skipping build." ; else npm run build ; fi

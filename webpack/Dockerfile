FROM node:12-alpine as base
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY . .

FROM base as development
RUN npm install --only=development
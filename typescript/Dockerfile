FROM node:12-alpine as base
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production

FROM base as build
RUN npm install --only=development
COPY . .
RUN npm run build

FROM base as production
COPY --from=build /usr/src/app/dist ./dist
EXPOSE 3000
CMD ["node", "dist/index.js"]
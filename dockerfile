FROM node:18-alpine

WORKDIR /app

RUN apk add --no-cache ca-certificates

COPY package*.json ./

RUN npm ci --only=production

COPY . .

ENV NODE_ENV=production

EXPOSE 3000

CMD [ "node", "app.js" ]
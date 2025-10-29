FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

ENV NODE_ENV=production
ENV SPRING_SERVICE_URL=${SPRING_SERVICE_URL}

EXPOSE 3000

CMD [ "node", "app.js" ]
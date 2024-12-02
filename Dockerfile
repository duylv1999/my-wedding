FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install --only=production

COPY bundle.js /app/node_modules/reactjs-countdown/dist/bundle.js

RUN npm install -g serve

RUN npm run build --production

EXPOSE 3000

CMD serve -s build -l 3000

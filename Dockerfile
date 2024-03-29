FROM --platform=linux/amd64 node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3000

EXPOSE 3000

CMD [ "node",  "microsrvc.js" ]
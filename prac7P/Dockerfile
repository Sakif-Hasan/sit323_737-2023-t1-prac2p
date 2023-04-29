FROM node:12

WORKDIR /app

COPY packahe*.json ./

RUN npm install

COPY . .

ENV PORT=8000

EXPOSE 8000

CMD ["node","index.js"]
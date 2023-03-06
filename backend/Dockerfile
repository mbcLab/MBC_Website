FROM node:lts-slim
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .


RUN npm install nodemon -g 

EXPOSE 5000
CMD ["node index.js"]

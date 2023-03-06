FROM node:lts
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .


RUN npm install nodemon  #this was needed in order to make it work

EXPOSE 5000
CMD ["sudo nodemon index"]

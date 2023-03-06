FROM node:lts-slim

# Create app directory
WORKDIR /
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copi>
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
RUN npm install -g serve
# Bundle app source
COPY . .
RUN npm run-script build

EXPOSE 80
CMD npx serve -s build -l 80

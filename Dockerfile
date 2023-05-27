FROM node:16.13.2

WORKDIR /home/arrivo_api

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]

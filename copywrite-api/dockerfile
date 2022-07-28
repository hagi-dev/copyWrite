#API
FROM node:12 as build

#set working directory
WORKDIR /server

#install app dependencies
COPY package.json ./

#instal all node packeages
RUN npm install

#copy everything over to docker environment
COPY . /server

#port
EXPOSE 3001

CMD [ "npm", "run", "serve" ]


#BUILD OF REACT
FROM node:12-alpine as build

#set working directory
WORKDIR /app

#install app dependencies
COPY package.json ./

#instal all node packeages
RUN npm install

#copy everything over to docker environment
COPY . .
RUN npm run build

########################################################################
#CREATE NGINX SERVER
FROM nginx:1.19.0-alpine as prod-stage
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

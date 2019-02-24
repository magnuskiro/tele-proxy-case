# define base image
FROM node:8

# create app dir
WORKDIR /usr/src/app

# add libs
COPY package*.json ./
RUN npm install 

# add app
COPY . .

# make webserver available outisde container.
EXPOSE 8080

# start the webserver
CMD [ "npm", "start" ]


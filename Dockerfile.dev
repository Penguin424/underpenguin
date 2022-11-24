FROM --platform=arm64 node:18.12.1-alpine3.15

# Path: DockerFile
WORKDIR /app

# Path: DockerFile
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .

#Expose port and start application
EXPOSE  3000

# Run: start app
CMD [ "yarn", "start" ]
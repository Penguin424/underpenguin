FROM node:18.12.1-alpine3.15

# Path: DockerFile
WORKDIR /app

# Path: DockerFile
COPY package.json .
ENV PATH /app/node_modules/.bin:$PATH

COPY yarn.lock .
COPY package.json .

RUN yarn
RUN yarn global add pm2

COPY . .

#Expose port and start application
EXPOSE  3000

# Run: start app
RUN yarn build
CMD ["pm2", "serve", "build/", "3000", "--name", "underpenguin", "--spa"]

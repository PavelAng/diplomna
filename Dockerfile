FROM node:16

WORKDIR /app

COPY . /app

RUN yarn
RUN yarn build

CMD [ "yarn", "dev" ]

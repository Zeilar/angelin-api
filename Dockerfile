FROM node:14.17.2

RUN mkdir -p /app

WORKDIR /app

COPY /package.json /app
COPY /tsconfig.json /app
COPY /ormconfig.json /app

RUN npm i
RUN npm i -g nodemon ts-node

COPY /src /app/src

CMD npm start

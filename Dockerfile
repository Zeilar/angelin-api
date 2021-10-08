FROM node:14.17.2

RUN mkdir -p /app

WORKDIR /app

COPY /package.json /app
COPY /tsconfig.json /app
COPY /knexfile.ts /app

RUN npm i
RUN npm i -g nodemon ts-node knex

COPY /src /app/src

CMD npm start

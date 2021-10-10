FROM node:14.17.2

RUN mkdir -p /app

WORKDIR /app

COPY /package.json /app
COPY /tsconfig.json /app
COPY /knexfile.ts /app
COPY /src /app/src
COPY /scripts /app/scripts

RUN npm i
RUN npm i -g nodemon ts-node knex

CMD npm start

FROM node:14.17.2

RUN apt-get update

RUN mkdir -p /app

WORKDIR /app

COPY /package.json /app
COPY /tsconfig.json /app
COPY /ormconfig.json /app

RUN npm i
RUN npm i -g nodemon ts-node typescript

COPY /src /app/src

CMD ["nodemon", "--transpile-only"]

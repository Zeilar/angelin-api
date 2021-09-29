FROM node:14.17.2

RUN mkdir -p /app

WORKDIR /app

COPY ./package.json /app
COPY ./.env /app
COPY ./.env.example /app
COPY ./.env.production /app
COPY ./tsconfig.json /app

RUN npm i
RUN npm i -g nodemon ts-node typescript

COPY ./src /app/src

CMD ["nodemon --transpile-only"]

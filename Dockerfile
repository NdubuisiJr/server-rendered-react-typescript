FROM node:12

COPY dist/ /src/dist/
COPY build/ /src/build/
COPY package.json /src

WORKDIR /src

RUN npm install --production

EXPOSE 8080 

CMD npm start
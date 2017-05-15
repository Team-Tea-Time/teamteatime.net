FROM node:7.10.0

RUN mkdir -p /app

ADD package.json yarn.lock /app/
RUN cd /app; yarn
COPY . /app/

WORKDIR /app

ENV PORT 8080
EXPOSE 8080

CMD ["yarn", "dev"]

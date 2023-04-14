FROM node:16.14.0-alpine3.15
EXPOSE 80
ENV ODLControllerAddr=host.docker.internal
WORKDIR /Testwebapp
COPY ./ /Testwebapp
RUN npm install

CMD ["npm", "start"]
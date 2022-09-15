FROM node:17-slim
WORKDIR /opt/testapp
COPY . /opt/testapp/
RUN npm install && npm run build
EXPOSE 3000
CMD node .
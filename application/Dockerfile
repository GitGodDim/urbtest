FROM node:17-slim
WORKDIR /app
COPY . /app
RUN npm install && npm run build
EXPOSE 3000
CMD ["node", "."]
FROM node:17.9.1-alpine
WORKDIR /app
COPY . /app
ENV SYSDIG_AGENT_CONF 'app_checks: [{name: node, check_module: prometheus, pattern: {comm: node}, conf: { url: "http://localhost:3000/metrics" }}]'
RUN npm install && npm run build
EXPOSE 3000
CMD ["node", "."]

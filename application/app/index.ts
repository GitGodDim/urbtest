import * as express from 'express';
import 'express-async-errors';

const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
  const response = {
    hostname: req.hostname,
    uptime: process.uptime(),
    podname: process.env.HOSTNAME,
  };

  res.status(200).send(response);
});

app.listen(3000, () => {
  console.log('listening on 3000');
});

// Use express as HTTP middleware
// Feel free to use your own
// var express = require('express')
// var app = express()

// Initialize Prometheus exporter
const prom = require('prom-client')
const prom_gc = require('prometheus-gc-stats')
prom_gc()

// Export Prometheus metrics from /metrics endpoint
app.get('/metrics', function(req, res) {
res.end(prom.register.metrics());
});

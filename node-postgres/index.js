const express = require('express');
const { Client } = require('pg');

const config = {
  port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
};

const app = express();

const client = new Client('postgres://postgres:example@postgres:5432/postgres');

client
  .connect()
  .then(() => console.log('connected'))
  .catch((error) => console.error('connection error', error.stack));

app.get('/', (_request, response) => response.send('Hello, world!'));

app.listen(config.port, () => console.log(`App is running at http://localhost:${config.port}.`));

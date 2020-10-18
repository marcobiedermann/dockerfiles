const express = require('express');
const mongoose = require('mongoose');

const config = {
  port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
};

mongoose
  .connect('mongodb://mongo:27017/node-mongo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to Database'))
  .catch((error) => console.error(error));

const app = express();

app.get('/', (_request, response) => response.send('Hello, world!'));

app.listen(config.port, () => console.log(`App is running at http://localhost:${config.port}.`));

const express = require("express");

const config = {
  port: parseInt(process.env.PORT, 10) || 3000,
};

const app = express();

app.get("/", (_request, response) => response.send("Hello, world!"));

app.listen(config.port, () =>
  console.log(`App is running at http://localhost:${config.port}.`)
);

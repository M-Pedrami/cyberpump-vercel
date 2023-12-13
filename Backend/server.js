require("dotenv/config");
require("colors");
const db = require("./database/db");

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

db();

app.get("/", (req, res) => {
  res.send("<h1>HELLO WORLD</h1>");
});

app.listen(PORT, () =>
  console.log(`server listening on http://localhost:${PORT}`.bgCyan)
);

const fetch = require("node-fetch");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const ejs = require('ejs');
const path = require("path");
const { sql } = require("@vercel/postgres");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
const url = "https://www.google.com";
app.get("/", (req, res) => {
  fetch(url)
  .then(response => response.text())
  .then(text => console.log(text));
  res.send(text);
});


app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});



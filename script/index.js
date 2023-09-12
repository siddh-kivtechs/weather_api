const fetch = require("node-fetch");

const url = "https://www.google.com";

fetch(url)
  .then(response => response.text())
  .then(text => console.log(text));

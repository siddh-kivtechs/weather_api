const express = require("express");
const fetch = require("node-fetch");


const app = express();
const PORT = process.env.PORT || 3000;
// function get_data(url)
// {
  
// fetch(url)
//   .then(response => response.text())
//   return text;
// }
app.get("/", (req, res) => {
  res.send("<h2>It's Working!</h2>");
});


app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});

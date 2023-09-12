// In src/index.js
import express from 'express';
import fetch from 'node-fetch';


const app = express();
const PORT = process.env.PORT || 3000;

function get_data(url)
{
  
fetch(url)
  .then(response => response.text())
  return text;
}
app.get("/", (req, res) => {
  const url = "https://siddh-kivtechs.github.io/menu_kivtechs_json/part_10.json";
  res.send(get_data(url));
});


app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});

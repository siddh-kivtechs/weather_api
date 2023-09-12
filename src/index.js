import express from 'express';
// import axios or got instead of node-fetch
import axios from 'axios';

const app = express();
const PORT = process.env.PORT || 3000;

async function get_data(url) {
  // use axios or got to fetch the data and return the text
  const response = await axios.get(url);
  return response.data;
}

app.get("/", async (req, res) => {
  const url = "https://siddh-kivtechs.github.io/menu_kivtechs_json/part_10.json";
  // await the get_data call and send the result
  res.send(await get_data(url));
});

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});

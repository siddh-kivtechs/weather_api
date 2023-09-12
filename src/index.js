import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 3000;

async function get_data(url) {
  // await the fetch call and destructure the text property from the response
  const { text } = await fetch(url);
  // await the text() call and return the result
  return await text();
}

app.get("/", async (req, res) => {
  const url = "https://siddh-kivtechs.github.io/menu_kivtechs_json/part_10.json";
  // await the get_data call and send the result
  res.send(await get_data(url));
});

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});

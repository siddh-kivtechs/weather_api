const express = require('express');
// import axios or got instead of node-fetch
const axios = require('axios/dist/node/axios.cjs'); // node

const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
// Enable CORS for all routes
// Enable CORS for specific origin
app.use(cors());

async function get_data(url) {
  // use axios or got to fetch the data and return the text
  const response = await axios.get(url);
  return response.data;
}

app.get("/", async (req, res) => {
    let lat = req.headers['x-vercel-ip-latitude'];
  let lon = req.headers['x-vercel-ip-longitude'];
    const key= process.env.weather_key;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
  // await the get_data call and send the result
 //Get the callback name from the URL query parameter
//let callback = new URL(url).searchParams.get('callback');
  let callback='weather'

//Get the data from the URL and stringify it with the callback name
let data = callback + '(' + JSON.stringify(await get_data(url)) + ');';

//Send the data as JSONP
res.setHeader('Content-Type', 'application/javascript');
res.end(data);
  // res.send(url);
});

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});

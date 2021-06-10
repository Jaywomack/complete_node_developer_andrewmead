const axios = require('axios');
require('dotenv').config();
axios
  .get(
    `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_STACK_SECRET_KEY}&query=New York&units=f`
  )
  .then((response) => {
    const data = response.data;
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error.message);
  });

// axios
//   .get(
//     `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${process.env.MAPBOX_SECRET_KEY}&limit=1`
//   )
//   .then((response) => {
//     const data = response.data;
//     const latitude = data.features[0].geometry.coordinates[0];
//     const longitude = data.features[0].geometry.coordinates[1];
//     console.log(latitude, longitude);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

const axios = require('axios');
require('dotenv').config();

axios
  .get(
    `http://api.weatherstack.com/current?access_key=${process.env.SECRET_KEY}&query=New York`
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error.message);
  });

const request = require('request');

// const fetchBreedDescription = (inputBreed, callback) => {
  request('https://api.thecatapi.com/v1/breeds/search?q=Siberian', (error, response, body) => {
    console.log('statusCode:', response && response.statusCode);
  if (error) {
      console.log('error:', error); // Print the error if one occurred
      return;
    } else {
      console.log('body:', body); // Print the HTML for thecatapi
    }

    //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

  });
// };
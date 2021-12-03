const args = process.argv.slice(2);
const inputBreed = args[0];

const request = require('request');

const fetchBreedDescription = (inputBreed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${inputBreed}`, (error, response, body) => {
    console.log('statusCode:', response && response.statusCode);
    const data = JSON.parse(body); // ADDED to make string into OBJECT!
    console.log(data);
    //
    // console.log('type of body:', typeof body); // string!
    if (error) {
      console.log('error:', error); // Print the error if one occurred
      return;
    } else {
      // console.log('body:', body); // Print the HTML for thecatapi
    }

    //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

  });
};

fetchBreedDescription(inputBreed); // IT WORKED!!!
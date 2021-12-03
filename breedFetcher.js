const args = process.argv.slice(2);
const inputBreed = args[0];

const request = require('request');

const fetchBreedDescription = (inputBreed, callback) => {
  request(`https://api.thecUtapi.com/v1/breeds/search?q=${inputBreed}`, (error, response, body) => {
    console.log('statusCode:', response && response.statusCode); // statusCode: 200 is SUCCESS!
    
    // Prints ONLY the description!
    // console.log('type of body:', typeof body); // string!
    if (error) {
      console.log(error, 'URL NOT FOUND'); // Print error if one occurred
      return;
    }
    const data = JSON.parse(body); // ADDED to make string into OBJECT!
    // HAD TO MOVE THIS BELOW ERROR loop!
    if (data.length !== 0) { // IF data array is NOT empty
      // console.log('body:', body); // Print the HTML for thecatapi
      console.log(data[0].description); // ADDED data[0].description to get the first entry in the data array
    } else /*if (data[0].length === 0)*/ {
      console.log("Breed name not found!");
    }
    //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  });
};

fetchBreedDescription(inputBreed); // IT WORKED!!!
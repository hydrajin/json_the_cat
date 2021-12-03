const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    // console.log('statusCode:', response && response.statusCode); // statusCode: 200 is SUCCESS!
  //  console.log(body);
    // Prints ONLY the description!
    // console.log('type of body:', typeof body); // string!
    if (error) {
      console.log(error, `${null} AN ERROR HAS OCCURED!`); // Print null if one occurred
      return;
    }
    const data = JSON.parse(body); // ADDED to make string into OBJECT!
    // HAD TO MOVE THIS BELOW ERROR loop!
    if (data.length !== 0) { // IF data array is NOT empty
      //callback('body:', body); // Print the HTML for thecatapi
      callback(null, data[0].description); // ADDED data[0].description to get the first entry in the data array
    } else {
      callback(null, "Breed name not found!");
    }
    //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  });
};

module.exports = { fetchBreedDescription };
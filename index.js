const { fetchBreedDescription } = require('./breedFetcher');
const process = require('process'); // Mentor told me to add this
const args = process.argv.slice(2);
const breedName = args[0];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});
const request = require('request');

const args = process.argv.slice(2);
const argString = args.toString();

request(`https://api.thecatapi.com/v1/breeds/search?q=${argString}`, (error, response, body) => {
  if (error) {
    console.log("Nope")
  }

  const data = JSON.parse(body);

  if (!data[0]) {
    console.log("Breed not found");
  } else {
    console.log(data[0].description)
  }
});



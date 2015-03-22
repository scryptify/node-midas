var sys = require('sys'),
request = require('request');

// Load Procted Env file
require('dotenv').load();

var key = process.env.COINKITE_API_KEY;
var secret = process.env.COINKITE_API_SECRET;

sys.puts(key);
sys.puts(secret);

/*request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
//    console.log(body) // Show the HTML for the Google homepage.
  }
})
*/

request('https://api.coinkite.com/public/rates', function(error, response, body){
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the JSON for the public rate api endpoint
  }
})



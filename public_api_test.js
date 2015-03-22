var sys = require('sys'),
request = require('request');

// Load Procted Env file
require('dotenv').load();

// showing a few endpoints
// body returns the result of the call
['rates', 'nyms', 'chad_rick'].map( function(item) {
  sys.puts(item);
  request('https://api.coinkite.com/public/'+item, function(error, response, body){
    if (!error && response.statusCode == 200) {
      console.log(body) // Show the JSON for the public rate api endpoint
    }
  })
});

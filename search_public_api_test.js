var sys = require('sys'),
request = require('request');

// Load Procted Env file
require('dotenv').load();

// replace value with a valid search. This will return 0 results
var item = 'rick';

// showing a few endpoints
// body returns the result of the call
sys.puts(item);
request.get('https://api.coinkite.com/v1/search/nym/'+item)
       .on('response', function(response){
         console.log(response.statusCode);
       });

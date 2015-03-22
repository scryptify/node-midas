var sys = require('sys'),
request = require('request');

// Load Procted Env file
require('dotenv').load();

var key = process.env.COINKITE_API_KEY;
var secret = process.env.COINKITE_API_SECRET;

sys.puts(key);
sys.puts(secret);

// Read https://github.com/coinkite/coinkite-javascript for help
CK_API = require('./coinkite-api.js');
console.log("Example:\n", CK_API.auth_headers('aa', 'bb', 'cc'));

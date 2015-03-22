// Require sys for print on command line
var sys = require('sys');

// Load Procted Env file
require('dotenv').load();

var key = process.env.COINKITE_API_KEY;
var secret = process.env.COINKITE_API_SECRET;

sys.puts('Your Key is: ' + key);
sys.puts('Your Secret is: ' + secret);

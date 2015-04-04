var sys = require('sys'),
request = require('request'),
crypto = require('crypto');

// Load Procted Env file
require('dotenv').load();

var key = process.env.COINKITE_API_KEY;
var secret = process.env.COINKITE_API_SECRET;

// Read https://github.com/coinkite/coinkite-javascript for help
CK_API = require('./node_modules/coinkite/coinkite-api.js');
var coin_kite_header = CK_API.auth_headers(key, secret, 'https://api.coinkite.com/v1/my/self');
console.log("header:\n", coin_kite_header);


var options = {
  url: 'https://api.coinkite.com/v1/my/self',
  headers: coin_kite_header
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    console.log(info.stargazers_count + " Stars");
    console.log(info.forks_count + " Forks");
  }else{
    console.log('ERROR');
    console.log(response.body);
  }
}

request.get(options, callback);

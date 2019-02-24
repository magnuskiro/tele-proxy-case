'use strict';
const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/hello', (req, res) => {
  res.send('Hello world - virk!\n');
});

const request = require('request');

const apiUrl = "http://api.nilu.no";

app.get("/*", function(req, res){ 
    console.log(req.originalUrl);
    
    request(apiUrl+req.originalUrl, function (error, response, body) {
        console.log('error:', error); 
        console.log('statusCode:', response && response.statusCode); 

        if( response.statusCode === 200 ){
          //console.log('body:', body); 
          res.send(body);
        }else {
          res.send("Unsupported request. Look at https://api.nilu.no/ for api specification. "
             + "Response from api: " + body);
        }
    });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

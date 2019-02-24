'use strict';

const express = require('express');
const fs = require('fs');
const util = require('util');
const app = express();
const request = require('request');

const PORT = 8080;
const HOST = '0.0.0.0';
const apiUrl = "http://api.nilu.no";

// storage / persistence
function storeRes(response){
   fs.appendFile('storage/db', util.inspect(response), (err) => {  
       if (err) throw err;
   });
};

app.get("/test", function(req, res){
    res.send("testpage");
}); 

// proxy
app.get("/*", function(req, res){ 
    console.log(req.originalUrl);
    
    request(apiUrl+req.originalUrl, function (error, response, body) {
        console.log('error:', error); 
        console.log('statusCode:', response && response.statusCode); 

        if( response.statusCode === 200 ){
          //console.log('body:', body); 
		  storeRes(response);
          res.send(body);
        }else {
          res.send("Unsupported request. Look at https://api.nilu.no/ for api specification. "
             + "Response from api: " + body);
        }
    });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

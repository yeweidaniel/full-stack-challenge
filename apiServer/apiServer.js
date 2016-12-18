var express = require('express');
var app = express();
var fs = require("fs");

app.get('/api/v1/users', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
   		console.log( data );
		res.writeHeader(200, {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods':'GET, OPTIONS',
			'Access-Control-Allow-Headers': 'Origin, Content-Type'
		})
    	res.end( data );
   });
})

var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("API listening at http://%s:%s", host, port)

})
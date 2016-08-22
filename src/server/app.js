var express = require('express');
var app = express();

app.get('/emp', function(request, response) {
  response.send('Hello World');
});


app.listen(8080, function() {
  console.log('Sushil Listening on port 4444');
});

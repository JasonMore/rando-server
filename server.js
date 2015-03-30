var http = require('http');
var url = require('url');
var fs = require('fs');
var Qs = ('qs');
var bodyParser = require('body-parser');

//using express to load customizes static files
var express = require("express"),
    app = express(),
    port = process.env.PORT || 8080,
    router = express.Router();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
router.use('/api', router);

app.all("/api/*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    return next();
});

// var options = {
//   host: 'http://raise-interviews.herokuapp.com',
//   path: '/offer',
//   //This is what changes the request to a POST request
//   method: 'POST',
// };
//
// var httpReq = http.request(options, function (err, response, body) {
//   if(!err && response.statusCode == 200) {
//     console.log(body);
//   }
// });

router.get('/get', function (req, res) {
  res.send('done');
});

router.get('/', function (req, res) {
  res.send('hello');
});

app.listen(port);
console.log('Magic happens on port ' + port);

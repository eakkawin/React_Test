var express = require('express');
var bodyParser = require('body-parser');
var request = require('superagent');
var app = express();
var mailchimpInstance   = 'us16',
    listUniqueId        = '0075a6a953',
    mailchimpApiKey     = 'ded3561b4077ae87c146a81af0330baf-us16';
var path = require('path');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('js'))
app.get('/', function (req, res) {
  console.log(req.body);
  res.send('Hello World!');
});
app.post('/signup', function (req, res) {
  // save user details to your database.
  console.log(req.body);
  request
    .post('https://' + mailchimpInstance + '.api.mailchimp.com/3.0/lists/' + listUniqueId + '/members/')
    .set('Content-Type', 'application/json;charset=utf-8')
    .set('Authorization', 'Basic ' + new Buffer('any:' + mailchimpApiKey ).toString('base64'))
    .send({
      'email_address': req.body.Sub_email,
      'status': 'subscribed'
    })
    .end(function(err, response) {
      if (response.status < 300 || (response.status === 400 && response.body.title === "Member Exists")) {
        res.send('Signed Up!');
      } else {
        console.log(response.status);
        res.send('Sign Up Failed :(');
      }
  });
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

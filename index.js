const express = require('express')
const path = require('path')
var bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .post('/rides', function(request, response) {
    // var username = request.body.username;
    // var lat = request.body.lat;
    // var lon = request.body.lng;
    var rand = Math.floor(Math.random() * 2);
    if(rand == 1){
      response.send(request.body);
    } else {
      response.send("good");
    }
  }) 
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

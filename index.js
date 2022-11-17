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
    var username = request.body.username;
    var lat = request.body.lat;
    var lon = request.body.lng;
    if(user == "" || lat == "" || lon == ""){
      throw new Error('Whoops, something is wrong with your data!');
      // response.send({"error":"Whoops, something is wrong with your data!"});
    } else {
      response.send("good");
    }
  }) 
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

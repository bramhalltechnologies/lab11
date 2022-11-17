const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .post('/rides', function(request, response) {
    var username = request.body.username;
    var lat = request.body.lat;
    var lon = request.body.lng;
    if(username ==  "" || lat == "" || lng == ""){
      response.send("bad");
    } else {
      response.send("good");
    }
  }) 
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

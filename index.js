const express = require('express')
const path = require('path')
var bodyParser = require('body-parser');
var validator = require('validator'); 


const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .post('/rides', function(request, response) {
    response.send(String(request.body));
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

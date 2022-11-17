const express = require('express')
const path = require('path')
var bodyParser = require('body-parser');
var validator = require('validator'); 

var app = express();

// See https://stackoverflow.com/questions/5710358/how-to-get-post-query-in-express-node-js
app.use(bodyParser.json());

// See https://stackoverflow.com/questions/25471856/express-throws-error-as-body-parser-deprecated-undefined-extended
app.use(bodyParser.urlencoded({ extended: true })); // Required if we need to use HTTP post parameters

const PORT = process.env.PORT || 5000

app.post('/rides', (req, res) => {
  console.log('Got body:', req.body);
  res.sendStatus(200);
});
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .post('/rides', function(request, response) {
//     response.send(String(request.body));
//   })
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))

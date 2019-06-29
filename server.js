var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');


var app = express();

var PORT = process.env.PORT || 3000;


var db = require('./models');

app.use(express.static(process.cwd() + '/public'));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


app.use(methodOverride('_method'));



var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



require('./controllers/burgers_controller')(app);


db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
  });
});
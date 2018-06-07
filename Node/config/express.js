var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = () => {
  var app = express();

  app.use(bodyParser.urlencoded({extended: true}));

  //requisição -> middlewareBodyParsers -> middlerwareAutenticação -> função que trata a requisição

  app.set('view engine', 'ejs');
  app.set('views', './app/views');

  load('routes', {
    cwd: 'app'
  }).then('infra').into(app);

  return app;
};

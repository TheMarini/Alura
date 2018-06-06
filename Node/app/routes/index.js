module.exports = (app) => {
  app.get('/', function(req, res){
      res.send('Esse é o index');
  })
}

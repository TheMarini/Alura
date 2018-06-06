module.exports = (app) => {
  app.get('/produtos', function(req, res) {

    var connection = app.infra.connectionFactory();

    new app.infra.ProductsDAO(connection).lista(function(errors, results) {
      res.render('produtos/lista', {
        lista: results || [],
        errors: errors
      });
    });

    connection.end();
  })

  app.get('/produtos/form', function(req, res){
      res.render('produtos/form');
  })

  app.post('/produtos/salva', function(req, res){

    // var produto = req.body;
    // console.log(produto);

    // new app.infra.connectionFactory(connection).salva(produto, function(errors, results){
    //   res.render('produtos/lista');
    // })
  })
}

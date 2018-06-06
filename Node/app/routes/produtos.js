module.exports = (app) => {
  app.get('/produtos', function(request, response) {

    var connection = app.infra.dbConnection();

    app.infra.dbProducts(connection).lista(function(errors, results) {
      response.render('produtos/lista', {
        lista: results || [],
        errors: errors
      });
    });

    connection.end();
  })

  app.get('/produtos/remove', function(){

  })
}

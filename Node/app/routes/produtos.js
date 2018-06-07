function connection(app, callback) {
  let connection = app.infra.connectionFactory();
  callback(connection);
  connection.end();
}

module.exports = (app) => {
  //List
  app.get('/produtos', function(request, response) {
    connection(app, (connection) =>
      new app.infra.ProductsDAO(connection).lista((errors, results) =>
        response.render('produtos/lista', {
          lista: results || [],
          errors: errors
        })
      )
    )
  })
  //Form
  app.get('/produtos/form', function(request, response) {
    response.render('produtos/form');
  })
  //Input
  app.post('/produtos/salva', function(request, response) {
    connection(app, (connection) =>
      new app.infra.ProductsDAO(connection).salva(request.body, (errors, results) =>
        res.redirect('/produtos')
      )
    )
  })
}

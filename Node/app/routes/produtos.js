//Connection Environment
function connection(app, callback) {
  let connection = app.infra.connectionFactory();
  callback(connection);
  connection.end();
}

//Module Exports
module.exports = (app) => {

  //List
  app.get('/produtos', (request, response) =>
    connection(app, connection =>
      new app.infra.ProductsDAO(connection).lista((errors, results) =>
        response.render('produtos/lista', {
          lista: results || [],
          errors: errors
        })
      )
    )
  )

  //Insert
  app.post('/produtos', (request, response) =>
    connection(app, connection =>
      new app.infra.ProductsDAO(connection).salva(request.body, (errors, results) =>
        res.redirect('/produtos')
      )
    )
  )

  //Form
  app.get('/produtos/form', (request, response) =>
    response.render('produtos/form')
  )

  //Json
  app.get('/produtos/json', (request, response) =>
    connection(app, connection =>
      new app.infra.ProductsDAO(connection).lista((errors, results) =>
        response.json(results)
      )
    )
  )
}

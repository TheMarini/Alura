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
        response.format({
          html: () =>
            response.render('produtos/lista', {
              lista: results || [],
              errors: errors
            }),
          json: () =>
            response.json(results)
        })
      )
    )
  )

  //Insert
  app.post('/produtos', (request, response) => {
    request.assert('titulo', 'Titulo é obrigatório').notEmpty(); //Object | Validator Chain

    if (request.validationErrors()) //JSON with errors
      response.render('produtos/form')
    else
      connection(app, connection =>
        new app.infra.ProductsDAO(connection).salva(request.body, (errors, results) => {
          response.redirect('/produtos');
        })
      )
  })

  //Form
  app.get('/produtos/form', (request, response) =>
    response.render('produtos/form')
  )
}

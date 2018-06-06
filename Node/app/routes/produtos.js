module.exports = function(app) {
    app.get('/produtos', function(request, response) {

        var connection = app.infra.dbConnection();

        app.infra.dbProducts.lista(connection, function(errors, results){
            response.render('produtos/lista', {lista: results || [], errors: errors});
        });

        connection.end();
    })
}

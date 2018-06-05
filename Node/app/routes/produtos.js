module.exports = function(app) {
    app.get('/produtos', function(request, response) {

        var connection = app.infra.dbConnection();

        connection.query('select * from livros', function(err, results) {
            //response.send(results);
            response.render('produtos/lista',{lista:results})
        });
        connection.end();
    })
}

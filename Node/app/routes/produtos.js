var connection = require('../infra/dbConnection')();

module.exports = function(app) {
    app.get('/produtos', function(request, response) {

        connection.query('select * from livros', function(err, results) {
            //response.send(results);
            response.render('produtos/lista',{lista:results})
        });
        connection.end();
    })
}

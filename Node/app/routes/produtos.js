module.exports = function(app) {
    app.get('/produtos', function(request, response) {
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'casadocodigo_nodejs'
        });

        connection.query('select * from livros', function(err, results) {
            //response.send(results);
            response.render('produtos/lista',{lista:results})
        });
        connection.end();
    })
}

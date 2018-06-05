var mysql = require('mysql');

module.exports = function(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'casadocodigo_nodejs'
    })
}

///////////////////////////
//
// function createCon(){
//     return mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: 'root',
//         database: 'casadocodigo_nodejs'
//     })
// }
//
// module.exports = createCon;
//
// ///////////////////////////
//
// module.exports = function createCon(){
//     return mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: 'root',
//         database: 'casadocodigo_nodejs'
//     })
// }
//
// module.exports = {
//     createCon: createCon
// };
//
//
// const db = require('dbConnection')
// db.createCon()
//
// class DB {
//     constructor() {
//
//     }
// }
//
// module.exports = DB;

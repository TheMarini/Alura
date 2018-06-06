var mysql = require('mysql');

//Wrapper for Express-Load
function connection() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'casadocodigo_nodejs'
  })
}

module.exports = function() {
  return connection;
}

//DEBATE: Function or not function
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

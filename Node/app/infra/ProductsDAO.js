module.exports = () =>
  class ProductsDAO {
    constructor(connection) {
      this._connection = connection;
    }
    lista(callback) {
      this._connection.query('select * from livros', callback);
    }
    salva(produto, callback) {
      this._connection.query('insert into livros set ?', produto, callback);
    }
  }

///////////////////////

// class ProductsDAO {
//   constructor(connection) {
//     this._connection = connection;
//   }
// }
//
// ProductsDAO.prototype.lista = function(callback) {
//   this._connection.query('select * from livros', callback);
// }

///////////////////////

// function ProductsDAO(connection) {
//   this._connection = connection;
// }
//
// ProductsDAO.prototype.lista = function(callback) {
//   this._connection.query('select * from livros', callback);
// }

///////////////////////

// module.exports = () =>
//     function (connection) {
//
//       console.log(this);
//       return this;
//   }

//TEST: Named function | Anonymous function | Arrow function
///////////////////////

// var teste = {
// 	t: function T (x) {
// 		this.value = x;
//     },
// 	y: function (x) {
// 		this.value = x;
//     },
// 	u: (x) => {
// 		this.value = x;
//     },
// 	value: 1
// };

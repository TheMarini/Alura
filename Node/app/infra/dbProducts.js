module.exports = () =>
    function (connection) {
      this.lista = function(callback) {
        connection.query('select * from livros', callback);
      }
      this.remove = function(callback){

      }
      return this;
  }

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

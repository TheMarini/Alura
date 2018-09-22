var config = {
  hostname: 'localhost',
  port: 80,
  path: '/produtos',
  method: 'post',
  headers: {
    'Accept': 'application/json',
    'Content-type': 'application/json'
  }
};

var produto = {
  titulo: '',
  preco: 230,
  descricao: 'Inserção feita pelo terminal'
}

require('http').request(config, (response) => {
  console.log(response.statusCode);
  response.on('data', (body) => console.log('data' + body))
}).end(JSON.stringify(produto));

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
  titulo: 'Terminal',
  preco: 100,
  descricao: 'Inserção feito pelo terminal'
}

require('http').request(config, (response) => {
  console.log(response.statusCode);
  response.on('data', (body) => console.log('Body' + body))
}).end(JSON.stringify(produto));

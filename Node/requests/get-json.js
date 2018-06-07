var config = {
  hostname: 'localhost',
  port: 80,
  path: '/produtos',
  headers: {
    'Accept':'application/json'
  }
};

require('http').get(config, (response) => {
  console.log(response.statusCode);
  response.on('data', (body) => console.log('Body' + body))
})

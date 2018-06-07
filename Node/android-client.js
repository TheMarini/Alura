var config = {
  hostname: 'localhost',
  port: 80,
  path: '/produtos/json'
};

require('http').get(config, (response) => {
  console.log(response.statusCode);
  response.on('data', (body) => console.log('Body' + body))
})

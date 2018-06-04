var port = 80;
var ip = "localhost";

require('http').createServer(function(request, response) {
    if(request.url =="/produtos"){
      response.end("<html><body>listando os produtos da loja</body>");
    } else {
      response.end("<html><body>home da casa do codigo</body></html>");
    }
}).listen(port, ip);

console.log("O servidor está rodando em http://" + ip + ":" + port);

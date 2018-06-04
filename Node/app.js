var app =  require('express')();

app.get('/produtos', function(request, response){
    response.send("<html><body><h1>Listagem de produtos</h1></body></html>");
});

app.listen(80, function(){
    console.log('rodando');
})

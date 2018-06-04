var app =  require('express')();

app.set('view engine', 'ejs');

app.get('/produtos', function(request, response){
    console.log("listando");
    response.render("produtos/lista")
});

app.listen(80, function(){
    console.log('rodando');
})

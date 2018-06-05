var app = require('./config/express');
require('./app/routes/produtos')(app);

app.listen(80, function(){
    console.log('rodando');
})

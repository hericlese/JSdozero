const express =     require('express');
const app =         express();
const db =          require('./db/connection');
const bodyParser =  require('body-parser');
const PORT = 3000;

app.listen(PORT, function(){
    console.log(`O Express está rodando na porta ${PORT}`);
});

// apontando que irei utilizar body parser
app.use(bodyParser.urlencoded({extended: false}));


// db connections
db 
    .authenticate()
    .then(()=> {
        console.log("Conectou ao banco com sucesso");
    })
    .catch(err => {
        console.log("Ocorreu um erro ao conectar ao banco", err);
    });

//routes
app.get('/', (req , res) => {
    res.send("está funcionando !!!");
});

// jobs routes (express)
app.use('/jobs', require('./routes/jobs'));
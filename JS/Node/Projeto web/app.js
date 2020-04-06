const express =     require('express');
const exphbs =      require('express-handlebars'); 
const app =         express();
const path=         require('path');
const db =          require('./db/connection');
const bodyParser =  require('body-parser');
const PORT = 3000;

app.listen(PORT, function(){
    console.log(`O Express está rodando na porta ${PORT}`);
});

// apontando que irei utilizar body parser
app.use(bodyParser.urlencoded({extended: false}));


//handlebars    para compilação de views
app.set('vews',path.join(__dirname,'views')); //diretorio das views
app.engine('handlebars', exphbs({defaultLayout: 'main'}));  // aquivo principal de layout da aplicação
app.set('view engine', 'handlebars'); // dizendo qual a vew engine, framework que ira renderizar as views


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
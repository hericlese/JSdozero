const express =     require('express');
const exphbs =      require('express-handlebars'); 
const app =         express();
const path=         require('path');
const db =          require('./db/connection');
const bodyParser =  require('body-parser');
const Job =         require('./models/Job');
const Sequelize =   require('sequelize'); //para usar o search da vaga
const Op =          Sequelize.Op;

const PORT = 3000;

app.listen(PORT, function(){
    console.log(`O Express está rodando na porta ${PORT}`);
});

// apontando que irei utilizar body parser
app.use(bodyParser.urlencoded({extended: false}));


//handlebars    para compilação de views
app.set('views',path.join(__dirname,'views')); //diretorio das views
app.engine('handlebars', exphbs({defaultLayout: 'main'}));  // aquivo principal de layout da aplicação
app.set('view engine', 'handlebars'); // dizendo qual a vew engine, framework que ira renderizar as views


// static folder css
app.use(express.static(path.join(__dirname, 'public')));



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

    let search = req.query.job; //GET da pagina no form
    let query =    '%'+search+'%'; // adicionar mais enfase na pesquisa como =PH ==PHP word == Wordpress e etc

    if(!search){

    
// codigo abaixo é rota para coleta de informações do banco para o index
    Job.findAll({order: [
        ['createdAt','DESC']
    ]}) // Sequelize busta todos os dados do sistema ordenando por data
    .then(jobs =>{

        res.render('index',{
            jobs
        });
    })
    .catch(err => console.log("Err"));

}else{
// codigo abaixo é rota para coleta de informações do banco para o index da pesquisa
Job.findAll({
    where:{title: {[Op.like/*para procurar coisas parecidas no banco*/]: query}},
    order: [
    ['createdAt','DESC']
            ]
}) // Sequelize busta todos os dados do sistema ordenando por data
.then(jobs =>{

    res.render('index',{
        jobs, search
    });
});

}
});

// jobs routes (express) poder utilizar os posts , gets e etc
app.use('/jobs', require('./routes/jobs'));
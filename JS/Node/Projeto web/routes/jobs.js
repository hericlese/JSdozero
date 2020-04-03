const express   = require('express');
const router    = express.Router();
const Job       = require('../models/job');

router.get('/test', (req, res)=> {
    res.send('deu certo!');
}); // rota de teste router



// add job via post
router.post('/add',(req, res)=>{

   let{title, salary, company, description, email, new_job} = req.body; 
   // intrutura do post (body parser)

   //metodo do sequelize que insere dados ao banco
   Job.create({
       title,
       description,                 
       salary,
       company,
       email,
       new_job
   })
   .then(() => res.redirect('/'))// caso faça volta a pagina para home
   .catch(err => console.log(err));
  

});
module.exports = router
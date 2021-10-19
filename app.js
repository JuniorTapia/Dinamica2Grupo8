const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const User = require('./models/User');
const { error } = require('console');
require('./database');

app.set('port', process.env.PORT|| 3000);

//const urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/api/user',(req,res) => {

    User.find({},(err,user)=>{
        if(err) return res.status(500).send({message: `Error al realizar la peticion ${err}`})
        if(!user) return res.status(404).send({message: `No existen usuarios`})
        res.send(200, { user });
    });
});

app.post('/api/user', (req,res)=>{
    console.log('POST /api/user');
    console.log(req.body);

    let user = new User();
    user.firstname = req.body.firstname
    user.lastname = req.body.lastname
    user.doc_id= req.body.doc_id

    user.save((err, userStored)=>{
        if(err) res.status(500).send({message: `Error al salvar en la base de datos: ${err}`})

        res.status(200).send({user: userStored});
    })
});


app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'));
});
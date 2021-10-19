const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const Mentor = require('./models/Mentor');
const Mentorizados = require('./models/Mentorizados');
const { error } = require('console');
require('./database');

app.set('port', process.env.PORT|| 3000);

//const urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//Metodos del Mentor
app.get('/api/mentor',(req,res) => {

    Mentor.find({},(err,mentor)=>{
        if(err) return res.status(500).send({message: `Error al realizar la peticion ${err}`})
        if(!mentor) return res.status(404).send({message: `No existen usuarios`})
        res.send(200, { mentor });
    });
});

app.post('/api/mentor', (req,res)=>{
    console.log('POST /api/mentor');
    console.log(req.body);

    let mentor = new Mentor();
    mentor.firstname = req.body.firstname
    mentor.lastname = req.body.lastname
    mentor.doc_id= req.body.doc_id

    mentor.save((err, mentorStored)=>{
        if(err) res.status(500).send({message: `Error al salvar en la base de datos: ${err}`})

        res.status(200).send({mentor: mentorStored});
    })
});


//Metodos del Mentorizado
app.get('/api/mentorizados',(req,res) => {

    Mentorizados.find({},(err,mentorizados)=>{
        if(err) return res.status(500).send({message: `Error al realizar la peticion ${err}`})
        if(!mentorizados) return res.status(404).send({message: `No existen usuarios`})
        res.send(200, { mentorizados });
    });
});

app.post('/api/mentorizados', (req,res)=>{
    console.log('POST /api/mentorizados');
    console.log(req.body);

    let mentorizados = new Mentorizados();
    mentorizados.firstname = req.body.firstname
    mentorizados.lastname = req.body.lastname
    mentorizados.doc_id= req.body.doc_id
    mentorizados.doc_id_mentor=req.body.doc_id_mentor

    mentorizados.save((err, mentorizadosStored)=>{
        if(err) res.status(500).send({message: `Error al salvar en la base de datos: ${err}`})

        res.status(200).send({mentorizados: mentorizadosStored});
    })
});

app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'));
});
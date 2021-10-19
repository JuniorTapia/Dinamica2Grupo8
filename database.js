const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Labo2',{
    //ponemos configuraciones para que el modulo si se actualiza no haya problemas cuando estes haciendo consultas a tu bd 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db=> console.log('Se conecto a la BD Mongo')).catch(err => console.error(err));

module.exports = mongoose;
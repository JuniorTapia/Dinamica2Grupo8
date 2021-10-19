const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://junior:junior123@dinamica2grupo8.l4goe.mongodb.net/dinamica2grupo8?retryWrites=true&w=majority',{
    //ponemos configuraciones para que el modulo si se actualiza no haya problemas cuando estes haciendo consultas a tu bd 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db=> console.log('Se conecto a la BD Mongo')).catch(err => console.error(err));

module.exports = mongoose;

//mongodb+srv://junior:junior123@dinamica2grupo8.l4goe.mongodb.net/dinamica2grupo8?retryWrites=true&w=majority
const mongoose=require('mongoose');

const {Schema} = mongoose;

const MentorizadosSchema = new Schema({
    firstname:{type: String, required:true},
    lastname:{type: String, required:true},
    doc_id:{type: String, required:true, unique:true},
    doc_id_mentor:{type: String, required:true}
});

module.exports = mongoose.model('Mentorizados',MentorizadosSchema);
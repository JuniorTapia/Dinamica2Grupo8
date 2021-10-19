const mongoose=require('mongoose');

const {Schema} = mongoose;

const MentorSchema = new Schema({
    firstname:{type: String, required:true},
    lastname:{type: String, required:true},
    doc_id:{type: String, required:true, unique:true}
});

module.exports = mongoose.model('Mentor',MentorSchema);
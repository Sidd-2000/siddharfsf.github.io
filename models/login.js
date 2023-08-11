const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    name:{type: 'string',required: true},
    email:{type: 'string',required: true},
    msg : {type: 'string',required: true}
},{timestamps:true});

export default mongoose.model('login', loginSchema);
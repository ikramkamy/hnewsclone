const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    name:{
type:String,

    },
  text: { type: String, required: true },
 auteur:{
     type:String,
 },
 article:{
     type:String
 }
 
});

const Post= mongoose.model('Mypost', postSchema);

module.exports =  Post;
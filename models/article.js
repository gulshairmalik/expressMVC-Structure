let mongoose = require('mongoose');

//Article Schema
let articleSchema = mongoose.Schema({
    name:{
        type:String
    },
    description:{
        type:String
    }
});

let Article = module.exports = mongoose.model('articles',articleSchema);
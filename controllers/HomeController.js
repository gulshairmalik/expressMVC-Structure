
let Article = require('../models/article');

exports.Index = function(req,res){
    Article.find({},function(err,articles){
        if(err){
            console.log(err);
        }else{
            res.render('index',{articles:articles});
        }
    });
    
}

exports.about = function(req,res){
    res.send('About Page');
}
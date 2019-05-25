const express = require('express');
const port = process.env.PORT || 3000;
const path = require('path');
const mongoose =  require('mongoose');
const db_url = 'mongodb://localhost/mvc';
const app = express();

//Sending App Object to route file
require('./config/routes')(app);

mongoose.connect(db_url);
let db = mongoose.connection;

db.on('error',function(err){
    if(err){
        console.log(err);
    }
});
db.once('open',function(){
    console.log('DB Connected Successfully');
});


app.set('views', path.join(__dirname, 'views'));
app.set('view engine','pug');
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log('Server started on port '+port);
});
var HomeController =  require('../controllers/HomeController.js');

module.exports = function(app){
    app.get('/',HomeController.Index);
    app.get('/about',HomeController.about);
}
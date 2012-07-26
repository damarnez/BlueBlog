var Articles = require('../entities/article');
module.exports = function(app, passport) {

    app.get('/api/articles', function(req, res) {
        console.log("ENTER /articles");
        Articles.find({}, function(err, _articles) {
            if (err) { return next(err); }
            return res.json(_articles, 200);
        });
    });
    
    app.get('/api/articles/:id', function(req, res) {
       Articles.find({_id:req.params.id}, function(err, _articles) {
        if (err) { return next(err); }
        return res.json(_articles, 200);
       });   
    });
    
    app.post('/api/articles', function(req, res) {
          res.json("NEW ARTICLE",201);     
    });
};

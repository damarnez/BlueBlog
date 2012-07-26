module.exports = function(app, passport) {

    app.get('/admin/logout', function(req, res) {
        req.logOut();
        res.redirect('/');
    });

    app.get('/admin/login', function(req, res) {
        if (req.user) {
            res.redirect('/admin');
        } else {
            res.render("./login.html");
        }
    });

    app.post('/admin/login', passport.authenticate('local', {
        successRedirect: '/admin',
        failureRedirect: '/admin/login',
        failureFlash: true
    }));

    app.post('/admin/loginApp',
        passport.authenticate('local'),
            function(req, res) {
            res.json({ok:1},200);
        }
    );
};

var User = require('./lib/entities/user');

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ name: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Unknown user' });
      }
      if (!user.validatePassword(password)) {
        return done(null, false, { message: 'Invalid password' });
      }
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findOne({_id:id}, function (err, user) {
    done(err, user);
  });
});

passport.checkAuth = function(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/admin/login');
};

passport.checkAuthAPI = function(req, res, next) {
  if (req.isAuthenticated()) { return next();}
  res.send('Unauthorized, please log in.', 401);
};

module.exports = passport;
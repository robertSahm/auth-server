// routes decides which controller to send request to
// controllers send out responses 
const Authentication = require('./controllers/authentication')
const passportService = require('./services/passport')
const passport = require('passport')

// helpers
const requireAuth = passport.authenticate('jwt', { session: false })
const requireSignin= passport.authenticate('local', { session: false })

module.exports = function(app) {
  app.get('/', requireAuth, function(req, res) {
    res.send({ message: 'super secret code is ABC123' })
  })
  app.post('/signin', requireSignin, Authentication.signin)
  app.post('/signup', Authentication.signup) 
}

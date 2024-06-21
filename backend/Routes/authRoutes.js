const express = require('express');
const passport = require('passport');
const router = express.Router();
const { signUp, login } = require('../Controller/authController');

router.post('/signup', signUp);
router.get('/login', login);

// Google Authentication
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
// router.get('/google/callback',
//      passport.authenticate('google', { failureRedirect: '/login' }),
//       (req, res) => {
//     const token = jwt.sign({ userId: req.user._id, email: req.user.email }, "yourSecretKey", { expiresIn: '2d' });
//     res.status(200).json({ message: 'Login successful with Google', token });
// });
router.get('/google/callback',
    passport.authenticate('google'),
    (req, res) => {
        res.send('you reached the callback')
    })
module.exports = router;

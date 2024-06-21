const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../Model/userModel');

module.exports = function (passport) {
    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                callbackURL: 'http://localhost:8001/auth/google/callback',
            }, async (accessToken, refreshToken, profile, done) => {
                console.log('passport is authenticated');
                console.log(profile);
                const newUser = {
                    googleId: profile.id,
                    displayName: profile.displayName,
                    firstName: profile.name.givenName,
                    lastName: profile.name.familyName,
                    profilePic: profile.photos[0].value,
                    email: profile.emails[0].value,
                    qualification: "MCA",
                    professional: "IT",
                    age: "",
                    gender: "",
                    city: "",
                    state: "",
                    district: "",
                    confirmPassword: ""
                };

                try {
                    let user = await User.findOne({ googleId: profile.id });
                    if (user) {
                        done(null, user);
                    } else {
                        user = await User.create(newUser);
                        await user.save();
                        console.log(user);
                        done(null, user);
                    }
                } catch (err) {
                    console.error(err);
                    done(err, null);
                }
            }
        )
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => done(err, user));
    });
};

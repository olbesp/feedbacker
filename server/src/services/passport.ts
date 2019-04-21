import passport from 'passport';
import passportGoogleOauth20 from 'passport-google-oauth20';

const GoogleStrategy = passportGoogleOauth20.Strategy;

const googleStrategyOptions: passportGoogleOauth20.StrategyOptions = {
  callbackURL: '/auth/google/callback',
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
};

passport.use(
  new GoogleStrategy(
    googleStrategyOptions,
    (accessToken, refreshToken, profile, done) => {
      //
    }
  )
);

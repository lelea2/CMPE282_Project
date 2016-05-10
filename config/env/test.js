module.exports = {
    port: 3001,
    // This is your MYSQL Database configuration
    db: {
        name: 'classicmodels',
        password: 'alphabet',
        username: 'alphabet',
        host:'cmpe282.ctupfrwq16vb.us-west-1.rds.amazonaws.com',
        port:3306
    },
    app: {
        name: 'MEAN - A Modern Stack - Test'
    },
    facebook: {
        clientID: 'APP_ID',
        clientSecret: 'APP_SECRET',
        callbackURL: 'http://localhost:3000/auth/facebook/callback'
    },
    twitter: {
        clientID: 'CONSUMER_KEY',
        clientSecret: 'CONSUMER_SECRET',
        callbackURL: 'http://localhost:3000/auth/twitter/callback'
    },
    github: {
        clientID: 'APP_ID',
        clientSecret: 'APP_SECRET',
        callbackURL: 'http://localhost:3000/auth/github/callback'
    },
    google: {
        clientID: 'APP_ID',
        clientSecret: 'APP_SECRET',
        callbackURL: 'http://localhost:3000/auth/google/callback'
    }
};

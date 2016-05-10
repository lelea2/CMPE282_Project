module.exports = {
    // This is your MYSQL Database configuration
    db: {
        name: 'classicmodels',
        password: 'alphabet',
        username: 'alphabet',
        host:'cmpe282.ctupfrwq16vb.us-west-1.rds.amazonaws.com',
        port:3306
    },
    app: {
        name: 'M*EAN Stack - Development'
    },
    // You will need to get your own client id's before this will work properly
    facebook: {
        clientID: '<CLIENT ID>',
        clientSecret: '<CLIENT SECRET>',
        callbackURL: 'http://localhost:3000/auth/facebook/callback'
    },
    twitter: {
        clientID: '<CLIENT ID>',
        clientSecret: '<CLIENT SECRET>',
        callbackURL: 'http://localhost:3000/auth/twitter/callback'
    },
    google: {
        realm: 'http://localhost:3000/',
        callbackURL: 'http://localhost:3000/auth/google/callback'
    }
};

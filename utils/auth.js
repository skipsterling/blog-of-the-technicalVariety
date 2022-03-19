const userAuth = (req, res, next) => {
    req.session.logged_in ? next() : res.redirect('/login');
};
const userAuthFetch = (req, res, next) => {
    req.session.logged_in ? next() : res.status(302).end();
};
module.exports = { userAuth, userAuthFetch };
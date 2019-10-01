const router = require('express').Router();
const users = require('./user.service');

router.get('/', function (req, res, next) {
    res.send(users());
});

module.exports = router;

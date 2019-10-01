const id = require("../util/util");
const repo = require("./corporation.repo");

const router = require('express').Router();

router.post('/', (req, res, next) => {
    const corp = {id: id(), ...req.body};
    repo.add(corp);
    res.send(corp);
});

module.exports = router;

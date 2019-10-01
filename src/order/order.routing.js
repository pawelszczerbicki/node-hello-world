const router = require('express').Router();
const service = require("./order.service");
const id = require("../util/util");

router.get('/:id', (req, res, next) => res.send(service.getReport(req.params.id)));

router.post('/', (req, res, next) => {
    let id = id();
    service.generateReport(id);
    res.send({id});
});

module.exports = router;

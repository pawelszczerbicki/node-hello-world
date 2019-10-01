const router = require('express').Router();
const service = require("./driver.service");
const {check, validationResult} = require('express-validator');

router.post('/', [
    check("email").isEmail(),
    check("name").exists(),
    check("surname").exists(),
    check("phone").exists()
], (req, res, next) => {
    const driver = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(422).json({errors: errors.array()});
    if (!service.corpoExists(driver.corporationId))
        return res.status(400).send("can not find corporation");
    return res.send(service.add(driver));
});

router.get("/closest", (req, res, next) => res.send(service.closest(req.body)));

router.get("/:id", (req, res, next) => res.send(service.get(req.params.id)));

router.post("/:id/pause/toggle", (req, res, next) => res.send(service.pause(req.params.id)));

router.post("/:id/rate", (req, res, next) => res.send(service.rate(req.params.id, req.body)));


module.exports = router;

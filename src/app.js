const express = require('express');
const corporation = require('./corporation/corporation.routing');
const driver = require('./driver/driver.routing');
const order = require('./order/order.routing');
const user = require('./user/user.routing');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/corporation', corporation);
app.use('/driver', driver);
app.use('/order/report', order);
app.use('/user', user);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
app.listen(port, () => console.log(`Server started on port ${port}`));

module.exports = app;

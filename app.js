const express = require('express');
const hello = require('./routes/hello');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', hello);
app.listen(port, ()=>console.log(`Server started on port ${port}`));

module.exports = app;

const path = require('path');
const filePath = path.join(__dirname, 'users.csv');
const csv = require("csvtojson");
let users = [];

csv().fromFile(filePath).then(jsonArrayObj => users = jsonArrayObj);

const get = () => users;

module.exports = get;

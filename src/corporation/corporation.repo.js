const data = {};

const add = (obj) => data[obj.id] = obj;
const exists = (id) => data[id];

module.exports = {add, exists};

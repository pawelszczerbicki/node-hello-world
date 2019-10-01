const data = {};

const add = (obj) => data[obj.id] = obj;
const get = (id) => data[id];

module.exports = {add, get, all: data};

const repo = require("./driver.repo");
const corpoRepo = require("./../corporation/corporation.repo");
const id = require("./../util/util");
const https = require('https');
const fetch = require("node-fetch");
const userUrl = "https://jsonplaceholder.typicode.com/users/1";
const WAITING = "WAITING";
const PAUSED = "PAUSED";

const corpoExists = (id) => corpoRepo.exists(id);

const get = async (id) => {
    const response = await fetch(userUrl);
    const json = await response.json();
    return {...repo.get(id), website: json.website}
};

const add = (driver) => repo.add({...driver, id: id(), rate: []});

const closest = (loc) => repo.all.value.reduce((prev, curr) => distance(prev.location, loc) < distance(curr.location, loc) ? prev : curr);

const pause = (id) => {
    const driver = repo.get(id);
    if (!driver.status || driver.status === PAUSED)
        driver.status = WAITING;
    else if (driver.status === WAITING)
        driver.status = PAUSED
};

const rate = (id, rate) => repo.get(id).rate.push(rate.rate);

const distance = (driverLoc, curr) => (curr.lat - driverLoc.lat) + (curr.lon - driverLoc.lon);

const countSatisfaction = () => avg(Object.values(repo.all).flatMap(d => d.rate));

const avg = arr => arr.reduce((p, c) => p + c, 0) / arr.length;
module.exports = {corpoExists, add, closest, get, pause, rate, countSatisfaction};

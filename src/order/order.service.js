const repo = require("./order.repo");

const reports = {};

const driverId = "test";
const getReport = (id) => reports[id];
const generateReport = async (id) => {
    const drivers = repo.all.filter(d => d.driver.id === driverId).length;
    const dates = repo.all.filter(d => createdAt.toDateString() === new Date().toDateString()).length;
    reports[id] = {drivers, dates};
};

module.exports = {generateReport, getReport};

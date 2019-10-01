const expect = require('chai').expect;
const driverService = require("./../../src/driver/driver.service");
describe('Driver service test', () => {
    it('should count satisfaction', () => {
        const driver = driverService.add({});
        driverService.rate(driver.id, {rate: 2});
        driverService.rate(driver.id, {rate: 2});
        expect(driverService.countSatisfaction()).to.equal(2);
    });
});


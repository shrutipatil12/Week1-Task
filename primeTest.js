const assert = require('chai').assert;
const result = require('../dataStructure_JS/primeNumber');
describe('Prime number Testcase', function () {

    it('input is out of range ', function () {
        let result2 = result
        assert.isFalse(result2 > 1000);
    });


    it('input should not be negative ', function () {
        let result2 = result
        assert.isFalse(result2 < 0);
    });
});
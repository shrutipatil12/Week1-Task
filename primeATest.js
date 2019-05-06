const assert = require('chai').assert;
const result = require('../dataStructure_JS/primeAnagram');
describe('Prime anagram Testcase', function () {

    it('Initial value should be greater than equal to zero  ', function () {
        let result2 = result
        assert.isFalse(result2 >= 0);
    });

    it('Final value should be less than 1000  ', function () {
        let result2 = result
         assert.isFalse(result2 <= 1000);
     });
});
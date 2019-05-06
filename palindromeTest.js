const assert = require('chai').assert;
const result = require('../dataStructure_JS/palindromeCheck');
describe('Palindrome checker Testcase', function () {

    it('Entered string length should be more than two ', function () {
        let result2 = result
        console.log("len" + result2)
        assert.isTrue(result2 > 2);
    });

    it('String should not be null', function () {
        let res = result;
        assert.isTrue(res == isNaN);
    });
});
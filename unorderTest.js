const assert = require('chai').assert;
const result = require('../dataStructure_JS/unorderList');
console.log(result)
describe('Basic mocha test for unoredred linked list', function () {
    it('file is null', function () {
        let result2 = result;

        assert.isFalse(result2 == 0);

    });
}); 
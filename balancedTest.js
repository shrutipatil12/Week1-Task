const assert = require('chai').assert;
const result = require('../dataStructure_JS/balancedParentheses');


describe('Balanced Parentheses testcase', function () {


  it('Expression should be greater than one operator', function () {
    let res = result;
    assert.isFalse(res > 0);
  });

  it('Expression should not br null', function () {
    let res = result;
    assert.isTrue(res==isNaN);
  });

  
});

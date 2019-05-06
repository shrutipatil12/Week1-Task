const assert = require('chai').assert;
const cal_res = require('../dataStructure_JS/calendar');//result


describe('To print calendar of month testcase', function () {


    it('Month should be greater than zero and less than 12', function () {
        let calMonth = cal_res[0];
        assert.isTrue(calMonth > 0 && calMonth <= 12);
    });


    it('Month should not be negative', function () {
        let calMonth = cal_res[0];
        assert.isFalse(calMonth < 0);
    });
  
    it('Year should four digit', function () {
        let calYear = cal_res[1];
        assert.isTrue(calYear > 999 && calYear < 9999);
    });

    it('Year should not be negative', function () {
        let calYear = cal_res[1];
        assert.isFalse(calYear < 0);
    });
  

});

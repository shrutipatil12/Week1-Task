/******************************************************************************
 *  Execution       :cmd> node calendar.js 
 *  Purpose         :To display calendar of month
 *
 *  @file           : calendar.js
 *  @overview       : Display calendar of month
 *  @author         : Shruti
 *  @version        : 1.0
 *  @since          : 3/05/2019
 *
 ******************************************************************************/
function calendarFun() {

    try {
        let util = require('../Utility/dataStructureUtil');
        // take month
        var read = require('readline-sync');
        let month = read.question("Enter the month");
        if (isNaN(month)) {
            throw "Enter valid month"
        } 
    
        // take year
        let year = read.question("Enter the year");
        if (isNaN(year)) {
            throw "Enter valid year"
        }

        util.calender(month, year);
        var arr = [];
        arr.push(month);
        arr.push(year);
        return arr;

    }
    catch (err) {
        console.log(err)
    }
}
module.exports = calendarFun();
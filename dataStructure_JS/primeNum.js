/******************************************************************************
 *  Execution       :cmd> node primeNum.js 
 *  Purpose         :To check string is palindrome or not
 *
 *  @file           : primeNum.js
 *  @overview       : To check string palindrome
 *  @author         : Shruti
 *  @version        : 1.0
 *  @since          : 2/05/2019
 *
 ******************************************************************************/


function prime() {
    var read = require('readline-sync');
    var Prime = require('../Utility/dataStructureUtil');
    //var show = require('util');
    var primes = [[], [], [], [], [], [], [], [], [], []];
    var initial = -2;
    var final = 100;

    try {

        if (index == -1 || index > 10) {
            console.log("prime numbers not calculated for this range ");
        }
        else {
            console.log(' Prime Numbers in the given range are \n');
            for (var index = 0; index < 10; index++) {
                primes[index] = Prime.checkPrime(initial, final);
                initial = initial + 100;
                final = final + 100;
            }
            var start = 0;
            var end = 100;

            //This condition checks the prime number range from starting to ending values 

            for (let index1 = 0; index1 < 10; index1++) {

                console.log("[" + "[" + start + "-" + end + "]" + " " + "[" + primes[index1] + "]" + "]");

                start = start + 100;
                end = end + 100;
                console.log();
            }
            return initial;
        }
    }
    catch (err) {
        console.log('error');
    }


}
module.exports = prime();

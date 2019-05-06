/******************************************************************************
 *  Execution       :cmd> node balancedParentheses.js 
 *  Purpose         : To check prime number and find anagram from it.
 *
 *  @file           : primeAnagram.js
 *  @overview       : To check prime number and anagram
 *  @author         : Shruti
 *  @version        : 1.0
 *  @since          : 3/05/2019
 *
 ******************************************************************************/
var primeAna = require('../Utility/dataStructureUtil');

var anaPrimes = [[], [], [], [], [], [], [], [], [], []];
var initial = 0; var final = 1000;
/* * This condition calculates the initial to final value range */
for (let index = 0; index < 1; index++) {
    anaPrimes[index] = primeAna.findAnaPrime(initial, final); 

}
var start = 0;
var end = 1000;
console.log("Range of Prime numbers which are Anagrams");
console.log(" ");
/*  This condition checks the Prime & Anagram number range from starting to ending values */
for (let index1 = 0; index1 < 1; index1++) {

    console.log("[" + "[" + start + "-" + end + "]" + " " + "[" + anaPrimes[index1] + "]" + "]");
    console.log("\n");
}

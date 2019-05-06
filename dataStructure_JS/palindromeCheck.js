/******************************************************************************
 *  Execution       :cmd> node palindromeCheck.js 
 *  Purpose         :To check string is palindrome or not
 *
 *  @file           : palindromeCheck.js
 *  @overview       : To check string palindrome
 *  @author         : Shruti
 *  @version        : 1.0
 *  @since          : 2/05/2019
 *
 ******************************************************************************/

function palin() {
    try {
        let deque = require("./dequeue");
        let readline = require("readline-sync");
        let input = readline.question("Enter String to check ");
        var len = input.length;
        if (input.length < 1) {
            throw "Enter valid string"

        }
        let dq = new deque.deque();
        let split = input.split("");
        let palindrome = true;
        // add character in queue
        for (let i = 0; i < input.length; i++) {
            dq.addrear(split[i]);
        }
        // check front and rear for palindrome
        while (!dq.isEmpty() && dq.rear != dq.front) {
            if (dq.removeFront() == dq.removeRear()) {
                palindrome = true;
            }
            else {
                palindrome = false;
                break;
            }
        }
        if (palindrome) {
            console.log("String is palindrome");
        }
        else {
            console.log("String is Not palindrome");
        }
        return len;
    }
    catch (err) {
        console.log(err);
    }
}
module.exports = palin();
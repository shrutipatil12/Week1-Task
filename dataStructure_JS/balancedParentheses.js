/******************************************************************************
 *  Execution       :cmd> node balancedParentheses.js 
 *  Purpose         : To check balanced parentheses
 *
 *  @file           : balancedParentheses.js
 *  @overview       : To check balanced parentheses
 *  @author         : Shruti
 *  @version        : 1.0
 *  @since          : 3/05/2019
 *
 ******************************************************************************/
function balancedP(){
try {
    
    var stack = require("./stack");
    var readline = require("readline-sync");
    var expression = readline.question("Enter Arithmatic Expression to check");
    var ss = new stack.stack();
    var ArithmaticExpression = expression.split("");
    console.log(ArithmaticExpression)
    for (let i = 0; i < ArithmaticExpression.length; i++) {
        // push in stack if "("
        if (ArithmaticExpression[i] == '(') {
            //console.log(ArithmaticExpression[i])
            ss.push('(');
        }
        // pop from the stack if ")"
        else if (ArithmaticExpression[i] == ')') {
            // if stack is empty and ")"
            if (ss.isEmpty()) {
                ss.push(')');
                break;
            }
            ss.pop();
        }
    }
    if (ss.isEmpty()) {
        console.log("Arithmatic Expression is Balanced");
    }
    else {
        console.log("Arithmatic Expression is Not balanced");
    }
    return expression;
}
catch (err) {
    console.log(err);
}
}
module.exports=balancedP();

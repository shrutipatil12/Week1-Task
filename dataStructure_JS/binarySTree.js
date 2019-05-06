/******************************************************************************
 *  Execution       :cmd> node binarySTree.js 
 *  Purpose         :To check number of binary tree
 *
 *  @file           : binarySTree.js
 *  @overview       : To check number of binary tree
 *  @author         : Shruti
 *  @version        : 1.0
 *  @since          : 3/05/2019
 *
 ******************************************************************************/
function binary(){
try {
    let utility = require("../Utility/dataStructureUtil");
    let readline = require("readline-sync");
    // read numbers of nodes
    let nodes = parseInt(readline.question("Enter of nodes="));
    if (isNaN(nodes) || nodes < 1) {
        throw "Enter valid number of nodes"
    }
    // calculate number of trees.
    utility.binaryTree(nodes);
    return nodes;

}

catch (err) 
{
    console.log(err)
}
}
module.exports=binary();
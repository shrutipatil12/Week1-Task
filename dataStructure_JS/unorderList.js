/******************************************************************************
 *  Execution       :cmd> node unorderList.js 
 *  Purpose         :Search list of words in file
 *
 *  @file           : unorderList.js
 *  @overview       : Search list of words in file 
 *  @author         : Shruti
 *  @version        : 1.0
 *  @since          : 2/05/2019
 *
 ******************************************************************************/
function unordered() {
    var list = require('./unorderListFunction');
    var filestream = require('fs');
    var readline = require('readline-sync');
    var writeUtil = require('../dataStructure_JS/unorderWriteFile');

try{

    var string = filestream.readFileSync('/home/bridgeit/mochatestcase/dataStructure_JS/abc.txt', 'UTF-8');
    //console.log(typeof(string))
    var array = string.split(' ');

    var unordList = new list.LinkedList;

    for (let i = 0; i < array.length; i++) {
        unordList.add(array[i]);
    }
    unordList.show();

    var answer = readline.question("Enter the word do you want to search  ");
    if (!isNaN(answer)) {
        console.log("input should be in string form ");
        //  return;
    }
    else {
        if (unordList.search(answer)) {
            unordList.remove(answer);
        }
        else {
            unordList.add(answer);
        }
    }

    unordList.show();
    
    var word = unordList.getData();
    console.log("word=", word);
    writeUtil.writeFile('/home/bridgeit/mochatestcase/dataStructure_JS/abc.txt', word);
    console.log("Linked list elements are ");
    unordList.show();
  
    if(unordList===null)
    {
        throw "File is empty";
    }
    return array;
}

catch(e)
{
    console.log("Error");
}
}

module.exports = unordered();


/* Write a function that check wheather a given string is a pallindrom or not */

let str = "assah";

function checkPallindrom(str){

    let res = ""
    for(let i = str.length-1 ;i>=0;i--){
        res = res+str[i];
    }
    // if(res === str){
    //     return true;
    // } else {
    //     return false;
    // }

    return res === str
}

let isPallindrom = checkPallindrom(str);
console.log(isPallindrom);

/* Write a function that return the reverse of a string */

function reverseOfString(str){
    let res = "";
    for(let i=str.length-1;i>=0;i--){
        res = res + str[i];
    }

    return res;
}

let result = reverseOfString('SONU');
console.log(result);
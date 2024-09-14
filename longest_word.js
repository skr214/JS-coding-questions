/* Write a function that return the longest word of a sentence */

let sentence = "My namejjjjjjjj is sonu kumaroo";

function longestWord(sent){
    let strArr = sent.split(' ');
    let big = "";
    for(let st of strArr){
        if(st.length > big.length){
            big = st
        }
    }
    return big;
}

let res = longestWord(sentence);
console.log(res);
/* Write a function that return numnbers of vowels in string */

function countVowels(string){
    let count = 0;
    let str = string.toLowerCase();
    for(let i = 0;i<str.length;i++){
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
            count++
        }
    }
    return count;
}

console.log(countVowels("Oonuhhhhjkloue"));

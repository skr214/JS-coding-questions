/* Write a function that check wheather a given string is a anagrams or not */

function areAnagrams(s1, s2) {
    // Sort both strings and compare
    return s1.split('').sort().join('') 
    === s2.split('').sort().join('');
}

// Test cases
let str1 = "listen";
let str2 = "silent";

if (areAnagrams(str1, str2)) {
    console.log("True");
} else {
    console.log("False");
}
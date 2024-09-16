/* Write a function to remove all whitespace characters from a string */

function removeWhiteSpace(str) {

    //With Regular expression
    let result = str.replace(/\s/g,'')
    console.log(result);

    //With normal for loop
    let s = "";
    for(let i = 0; i<str.length; i++){
        if(str[i] !== " "){
            s = s + str[i];
        }
    }
    console.log(s);
    
    //With the help of inbuild methods
    result = str.split(" ").join("");
    console.log(result);

}

//TestCases

removeWhiteSpace(" CSK, RCB ,MI,   LSG");
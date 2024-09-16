/* Write a function to find the largest number in an array */

function findLargestNumber(arr){
    let big = arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>big){
            big = arr[i];
        }
    }
    console.log(big);

    //With inbuild methods
    arr.sort((a,b)=>a-b).reverse();
    console.log(arr[0]);
}

//Test Case
let arr = [2,4,6,8,3];
findLargestNumber(arr);

let arr1 = [1010,900,9,-1000,10];
findLargestNumber(arr1);
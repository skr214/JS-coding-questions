/* Write a function to remove dublicate elements from an array */

let arr = [1,2,3,4,5,6,2,4,6,8,10,10,8];

// let set = new Set(arr);
// console.log(set);
// const array = Array.from(set);
// console.log(array);

for(let i = 0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]== arr[j]){
            arr.splice(j,1);
        }
    }
}
console.log(arr);
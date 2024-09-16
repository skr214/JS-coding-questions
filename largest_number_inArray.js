let arr = [2,4,6,8,3];

findLargestNumber(arr);

function findLargestNumber(arr){
    let big = arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>big){
            big = arr[i];
        }
    }
    console.log(big);
}
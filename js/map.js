//Question 1
//Given an array of integers, return a new array with each value doubled.
/*For example:
[1, 2, 3] --> [2, 4, 6]
*/

//Answer
function maps(arr){
    return arr.map(el => el * 2);
}

//Alternative Answer
function maps(x){
    let arr = [];
    for(let i = 0; i < x.length; i++){
    arr.push(x[i] * 2);
    }
    return arr;
}

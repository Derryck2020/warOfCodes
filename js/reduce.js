//Question 1
//Create an array of numbers. Sum all of the numbers. Alert the sum.

//Answer
let nums = [10, 20, 30, 50]
sum = nums.reduce((acc, current) => acc + current, 0)
alert(sum)

//Alternative Answer
let num = [10, 20, 30, 50]
let sum = 0
for (let i = 0; i < nums.length; i++){
    alert (sum = sum + nums[i])
} 



//Question 2
//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the 
//sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

//Answer
function compareSquareAndCube(a,b){
return a.reduce((acc,c) => acc + c**2, 0) > b.reduce((acc, c) => acc + c**3, 0)
}

console.log(compareSquareAndCube([2, 2, 2], [2, 2, 2]))



//Question 3
//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers. 
//Return your answer as a number.

//Answer
function sumOfValues(arr){
    return arr.reduce((acc, c) => acc + c, 0)
}
console.log(sumOfValues([2,'1',5,4,'2'])) 


//Follow-up from question 3
//what about if we want it to be summation not concatenation:

function sumOfValues(arr){
    return arr.reduce((acc, c) => +acc+ + c, 0)
}
console.log(sumOfValues([2, '1', 5, 4, '2']))



//Question 4
//Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, 
//find the missing element. Please note, there may be duplicates in the arrays, so checking if a numerical value exists 
//in one and not the other is not a valid solution.

//Answer
const summ = arr => arr.reduce((a, b) => a + b)
const findMissingNumber = (arr1, arr2) => summ(arr1) - summ(arr2)

findMissingNumber([1, 2, 2, 3], [1, 2, 3])

/*

//Question 5
//Our football team finished the championship. The result of each match look like "x:y". 
//Results of all matches are recorded in the collection.
//For example: ["3:1", "2:2", "0:1", ...]
//Write a function that takes such collection and counts the points of our team in the championship. 
//Rules for counting points for each match:
/*
if x > y: 3 points
if x < y: 0 point
if x = y: 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/

//Answer
const points=games=>games.reduce((output,current)=>{
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
},0)

//Alternative Answer
function points(games) {
    return games.reduce((output,current)=>{
        let x = parseInt(current[0]);
        let y = parseInt(current[2]);
        let value= x>y ? 3 : x===y ? 1 : 0;
        return output+value;
    },0)
}



//Question 6
//Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
//[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

//Answer
const grow = (nums) => nums.reduce((product, num) => product * num, 1);
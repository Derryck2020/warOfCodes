//Question 1
/*Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace 
on either side of the string, and print the value to the console.
*/

//Answer
let favDrink = " Malta Guinness from Melcom " 
favDrink = favDrink.trim()
console.log(favDrink)



//Question 2 
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

//Answer
let multipleWords = 'cake water apple sugar';
console.log(multipleWords.includes('apple'))

//Alternative Answer
let str = 'Bob dog sugar apple';
if (str.search('apple') !== -1){ // if this search do not find apple, it will return -1, but if it finds apple, then is not equal to -1 (!== -1)
    console.log('yes')
}else {
    console.log('no')
}



//Question 3
//Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console.

//Answer

let myFavHoliday = 'Easter';
console.log(myFavHoliday.toUpperCase())



//Question 4
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN).

//Answer
let myName = 'Washintong';
alert (myName.slice(-3));



//Question 5
//Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

//Answer
function subAndAlert(a,b,c,d,e){
    let solveIt = 100 - a - b - c - d - e;
    alert (Math.abs(solveIt))
}
subAlert(3, 6, 13, 8, 10)

//Alternative Answer
let solveIt = (a,b,c,d,e) => {
    100 - a - b - c - d - e;
    alert (Math.abs(solveIt))
}
solveIt(3, 6, 13, 8, 10)



//Question 6
//Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

//Answer
function findHighAndLowValues(num1, num2, num3){
    let min = Math.min(num1,num2,num3);
    let max = Math.max(num1,num2,num3);
    console.log(`The lowest num is ${min} and the highest num is ${max}`)
}
findHighAndLowValues(11, 2, 4)



//Question 7
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

//Answer
function headOrTails(){
    let result = Math.random()
    if (result > .5){
        return 'Head';
    } else {
        return 'Tail'
    }
}

//Alternative Answer
const headOrTails = _ => Math.random() < 0.5? 'Head' : 'Tail';
console.log(Math.random())

//Follow-up from Question 7
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times 
//where x is the number passed into the function. Call the function.

Answer
function flipFlip(x){
    for (let i = 1; i <= x; i++){
        let answer = headOrTails()
        console.log(answer)
    }
}
flipFlip(4)



//Question 8
//Create a function that takes in an array of numbers and return a new array containing every even 
//number from the original array (do not use map or filter).

Answer
function arrOfEvenNum(arr){
    let newArr = [];
    for (let i = 0; i < arr.length ; i++){
        if(i % 2 === 0){
            newArr.push(i);
        }
    }
    return newArr;
}
console.log(arrOfEvenNum([1,2,3,4,5,6,7,9,10,22,11,12]))

//Alternative Answer
function onlyEvens(nums){
    let evens = []
    nums.forEach(n => {
        if (n % 2 === 0){
            evens.push(n)
        }
    })
    return evens
}
console.log(onlyEvens([1,2,3,4,5,6,7,9,10,22,11,12])) // [2,4,6,10,22,12]



//Question 9
//You are getting ready to face Brock for the Boulder Badge. 
//You want three pokemon on your team that each have evolved at least once. 
//You have bulbasaur which is at level 5 and evolves at level 16, caterpie which is at level 1 and evolves at level 7, 
//and weedle which is at level 1 and evolves at level 7. Create three variables to store the number of rare candies 
//each of your pokemon would need to evolve (rare candies increase your level by one). 
//Finally, create a fourth variable named totalCandies that sums all the rare candies you would need.

//Answer
let bulbasaurCadies = 16 - 5
let caterpieCadies = 7 - 1
let weedleCadies = 7 - 1
let totalCandies = bulbasaurCadies + caterpieCadies + weedleCadies
console.log(totalCandies)


//Question 10
//You have a charmander in your party. Charmander can only battle if the temperature is above 0 degrees celcius. 
//Create one function that converts a Fahrenheit value to Celcius and another fuction that tells you whether 
//or not charmander can battle.

//Answer
function fahrenheitToCelcius(temperature){
    let convertedValue = (temperature - 31) * 9/2
    return convertedValue
}

function canCharmanderBattle(currentValue){
    let converted = fahrenheitToCelcius(currentValue)
    if (converted > 0){
        console.log('Charmander can battle')
    } else {
        console.log('Charmander cannot battle')
    }
}



//Question 11
// Your task is to split the chocolate bar of given dimension (n x m) into small squares. 
// Each square is of size (1 x 1) and unbreakable. Implement a function that will return minimum number of breaks needed.
// For example if you are given a chocolate bar of size (2 x 1) you can split it to single squares in just one break, 
// but for size (3 x 1) you must do two breaks. If input data is invalid you should return 0 (as in no breaks are 
// needed if we do not have any chocolate to split). Input will always be a non-negative integer.

//Answer
let breakChocolate = function(n, m) {
    if(n === 0 || m === 0) {
        return 0
    } else{
        return n*m - 1;
    }
};
console.log(breakChocolate(5,5))

//Alternative Answer
let crackChocolate = (n, m) => (n*m === 0) ? 0 : n * m - 1;
console.log(crackChocolate(5,5))
/*
(Here we use a ternary operator which is used in place of if...else statement)
Syntax: condition ? exprIfTrue : exprIfFalse
Note: Besides false, possible falsy expressions are: null, NaN, 0, the empty string (""), and undefined
*/



//Question 12
//Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves
//which pretend to be sheep. Fortunately, you are good at spotting them. Warn the sheep in front of the 
//wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at 
//the end of the array:

//[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//   7      6      5      4      3            2      1

//If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". 
//Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
//Note: there will always be exactly one wolf in the array.

//Examples
//Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
//Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

//Input: ["sheep", "sheep", "wolf"]
//Output: "Pls go away and stop eating my sheep"

//Answer
function warnTheSheep(queue) {
    const position = queue.reverse().indexOf('wolf');
    return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
}


//Question 13
//Your task is to sum the differences between consecutive pairs in the array in descending order.

/*Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]
Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).
*/

//Answer
function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}

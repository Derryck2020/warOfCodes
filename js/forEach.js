//Question 1
//Create and array of tv shows. Loop through and print each show to the console.

//Answer
let tvShows = ['Avengers','Game of Thrones','Kyle XY','TMWBA','Jason Bourne']
tvShows.forEach(show => console.log(show));



//Question 2
//Create a function that takes in an array of numbers. Return a new array of numbers that is every original number squared.

//Answer
let numbers = [2, 4, 6, 8, 10]
numbers.forEach(function(element,index,array){
    array[index] = element*element;
});
console.log(numbers)



//Question 3
//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

Answer
function multiNumsInArray (arr){
    let product = 1;
    arr.forEach(num => product *= num)
    alert(product);
}
multiNumsInArray([2,3,10])

//Alternative Answer
function multiNumsInArray (arr){
    let product = 1
    for (let i = 0; i < arr.length; i++){
        product *= arr[i];
    }
    alert(product)
}
multiNumsInArray([2,3,10])



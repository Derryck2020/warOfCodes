//Question 1
//Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". 
//If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

Answer
function firstVrsLastNum(arr){
    if (arr[0] < arr[arr.length - 1]){
        alert("Hi")
    } else if (arr[0] > arr[arr.length - 1]) {
        alert("Bye")
    } else {
        alert("We close in an hour!!!!!")
    }
};
firstVrsLastNum([10, 20, 30, 40]);



//Question 2
//Create a function that takes an array of letters, and combines them into words in a sentence.
//Test case: 
//[['J','L','L','M'],['u','i','i','a'],['s','v','f','n'],['t','e','e','']]
// Just Live Life Man

Answer 
function arrAdder(arr) {
    var sentence = "";
    for(let i = 0; i < arr[0].length; i++){ //at first array i.e. [[0],[1],...]
      for(let j = 0; j < arr.length; j++){ //inner array i.e [j] within [0] & so on...
        sentence+=arr[j][i]; //add all first indexes (i.e [0][0],[1][0],[2][0]) within each inner array, then [1],...
    }
      sentence+=" "; //when all the [0][0],[1][0],..., is added, we append it here to create each word.
    }
    return sentence.trim(); //we remove all the whitesapces
}


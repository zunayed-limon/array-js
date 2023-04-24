
// find(): returns the value of the first element in an array that passes a given test function, or undefined if no element passes the test

const myArray = [10, 20, 30, 40, 50];
const foundElement = myArray.find(element => element > 30);
console.log(foundElement); // output: 40

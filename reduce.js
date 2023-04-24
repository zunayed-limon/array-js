

// reduce(): applies a function to each element of an array, accumulating a single value as it goes

const myArray = [1, 2, 3];
const sum = myArray.reduce((acc, num) => acc + num, 0);
console.log(sum); // output: 6

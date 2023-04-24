

// splice(): changes the contents of an array by removing or replacing existing elements and/or adding new elements

const myArray = ['apple', 'banana', 'orange'];
myArray.splice(1, 0, 'pear', 'grape');
console.log(myArray); // output: ['apple', 'pear', 'grape', 'banana', 'orange']

myArray.splice(2, 2);
console.log(myArray); // output: ['apple', 'pear', 'orange']

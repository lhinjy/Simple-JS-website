/* eslint-disable */

/* TODO: create a doubleItem function that accepts an array of number and 
returns an array of equal length but with all of its item double  */

const doubleItem = [2, 1, 3];

function doubleArray(arr) {
  let doubledArray = [];
  for (const item of arr) {
    doubledArray.push(2 * item);
  }
  return console.log(doubledArray) || doubledArray;
}
// doubleArray(doubleItem);

/* TODO: create an invertSign function that accepts an array of number and 
returns an array of equal length but with all of its item sign inverted */

const invertSign = [2, 1, 3];
function invertArray(arr) {
  let invertedArray = [];
  for (const item of arr) {
    invertedArray.push(-item);
  }
  return console.log(invertedArray) || invertedArray;
}
// invertArray(invertSign);

/*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/
{
  const participants = [
    { name: 'Abu', idNumber: 'S7282395H', gender: 'male' },
    { name: 'Mary', idNumber: 'T4689018Z', gender: 'female' },
    { name: 'Suzi', idNumber: 'G5512873T', gender: 'female' },
    { name: 'T Chakra', idNumber: 'T8198514B', gender: 'male' }
  ];

  // TODO: assign idNumber of all participants to idNumbers
  const idNumbers = participants.map((participant) => participant.idNumber);
  // console.log(idNumbers); // ['S7282395H', 'T4689018Z', 'G5512873T', 'T8198514B']
}

/*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/
{
  const numbers = [3, -2, 1000, 201, 50, 100, 33, 50, -21];

 // TODO: get the results of multiplication of all the numbers using reduce method
const numMultiplyUsingReduce = numbers.reduce(
  (prevResult, item) => prevResult * item,
  1
);
console.log(numMultiplyUsingReduce);

// TODO: get the results of multiplication of all the numbers using for...of loop
let numMultiplyUsingFor = 1;
for (const number of numbers) {
  numMultiplyUsingFor = numMultiplyUsingFor * number;
}
console.log(numMultiplyUsingFor);
}

/*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/
{
  const numbers = [3, -2, 1000, 201, 50, 100, 33, 50, -21];

  // TODO: get all the positive numbers (above or equal to 0)

  // TODO: get all the odd numbers

  // TODO: get all the numbers that is larger before the number before it
  // (exclude first number)
}

/*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/

{
  const participants = [
    { name: 'Abu', idNumber: 'S7282395H', gender: 'male' },
    { name: 'Mary', idNumber: 'T4689018Z', gender: 'female' },
    { name: 'Suzi', idNumber: 'G5512873T', gender: 'female' },
    { name: 'T Chakra', idNumber: 'T8198514B', gender: 'male' }
  ];

  // TODO: get the names for all participants

  // TODO: get the id numbers for female participants only
}

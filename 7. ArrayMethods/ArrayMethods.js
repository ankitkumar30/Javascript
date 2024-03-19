/*
const arr = [1,2,3,4,5,6,7,8];
arr[99]=100;
//Output [ 1, 2, 3, 4, 5, 6, 7, 8, <91 empty items>, 100 ]
//if i do this then at 99th index the value will be stored 
//remaining indexes don't have any value
//if we try to access then output will be undefined
console.log(arr[12]);
*/

/*
const arr = Array(5,5,5,5,5,55,5)
console.log(arr)
/**
 * OutPut:-
 * [
  5,  5, 5, 5,    
  5, 55, 5        
]
 */

const arr = [1,2,3,4,5,6];
//arr.push(10,20,30);

/**
 * Output:
 * [
  1,  2,  3,  4, 5,
  6, 10, 20, 30
]
 */

//arr.unshift(-1,0)

/**
 * Output:-
 * [
  -1, 0, 1, 2,
   3, 4, 5, 6
]
Shift elements to the fisrt place but not an efficient way to do
Take(O(N))Time complexity
 */

//arr.shift()
/***
 * it removes the element at start of the array
 * Output:-
 * [ 2, 3, 4, 5, 6 ] 
 */

//arr.pop()
/**
 * Removes the last elements of the array
 * OutPut:-
 * [ 1, 2, 3, 4, 5 ]
 */

let array  = Array(15)//.fill(20,0,5);
//15 is the size of teh array initialized with undefined

array.fill(15)
/**
 * Output:-
 * [
  15, 15, 15, 15, 15, 15,
  15, 15, 15, 15, 15, 15,
  15, 15, 15
]
 */

//array.fill(15,5,10);
/**
 * Output:-
 * [ <5 empty items>, 15, 15, 15, 15, 15, <5 empty items> ]
 */

//let array  = Array(15).fill(20);
/**
 * Output:-
 * [
  20, 20, 20, 20, 20, 20,        
  20, 20, 20, 20, 20, 20,        
  20, 20, 20
]
 */

//let array  = Array(15).fill(20,0,5);
/**
 * it's filling just 0(inclusive) to 5 (exclusive) elements 
 * OutPut:-
 * [ 20, 20, 20, 20, 20, <10 empty items> ]

 */



console.log(array)
console.log(arr)
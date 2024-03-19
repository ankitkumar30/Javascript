/**
 * 1. Slice -> given an array and you want continuous segment of array then 
 * you can use slice
 * it will not make any change in the array
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 * arr = [10, 20, 30, 40, 50, 60, 70];
 * indx:  0.   1.  2.  3.  4.  5.  6
 *        -7.  -6. -5. -4. -3. -2  -1
 */ 

const arr = [1,2,3,4,5,6,"Ankit","Sanket","Humdum","Suniyo","re"];

//const slicedArray  = arr.slice(0,5);
/***
 * OutPut:-
 * [ 1, 2, 3, 4, 5 ]
 */

//const newArray = arr.slice(-1,-4)
//Output:

/**
 * const newArray = arr.slice(-4,-1)
 * input negative elements in such a way that it'll always iterate from left to right
 * [ 'Sanket', 'Humdum', 'Suniyo' ]
 * 
 * iterating from right to  left will output an empty array
 * ex:
 * const newArray = arr.slice(-1,-4)
 * Output:
 * []
 * 
*/

/**
 * 
 * arr.reverse();
 * OutPut:
 * [
  're',     'Suniyo',     
  'Humdum', 'Sanket',     
  'Ankit',  6,
  5,        4,
  3,        2,
  1
]
 * */

// const resultofjoin = arr.join(' ')

// console.log(resultofjoin)
/**
 * join(' ')
 * it combines elements of an array into a String 
 * OutPut:
 * 1 2 3 4 5 6 Ankit Sanket Humdum Suniyo re
 */

//delete arr[7];//updates the ith value with undefined
/**
 * This is an Operator
 */
/**
 * OutPut:
 * [ 1, 2, 3, 4, 5, 6, 'Ankit', <1 empty item>, 'Humdum', 'Suniyo', 're' ]
 * 
 */

/**
 * 
 * splice -> method -> remove elements and memory space from array
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

const result = arr.splice(2,3,"Hum","tumhare","Hai","Kon"); //from index 2 remove 3 elements













console.log(result)
console.log(arr);


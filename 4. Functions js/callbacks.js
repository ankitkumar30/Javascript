/**
 * 
 * We have already discussed that function are first classs citizen
 * 
 *  That claimed that we can pass function as an argument
 */

/**
 * 
 *  array -> list of numbers that we will get
 *  fn -> is a function passed as an argument to the processArray function
 */


function processArray(array,fn){

    for(let i = 0; i<array.length ;i++){ //iterating over every index of the array
        console.log(`cube of ${array[i]} = ${fn(array[i])}`);
        //i -> index
        //array[i] => value at the ith index
        //fn(array[i]) -> it will pass array[i] as argument to fn
        //fn(array[i]) ->
        // 1. We are calling fn
        // 2. Argument passed to call fn is array[i]
        // 3. fn represents the function passed as the argument to processArray i.e cube fn
    }
}



processArray([1,2,3,4,5,6,7,8],function cube(x){
    return x*x*x;
}); //passing function as an argument, fn->cube




//using calbacks writing a table of number
function Table(x,fn){
    for(let  i = 1; i<=10 ; i++){
        console.log(`${x} * ${i} = ${fn(x,i)}`);
    }
}
Table(8, function product(x,i){
    return x*i;
});


/*
const shoppingCart = [
    { product: 'Shoes', price: 80, quantity: 1 },
    { product: 'Bag', price: 120, quantity: 2 },
    { product: 'Watch', price: 250, quantity: 4 }
];

const totalPrice = shoppingCart.reduce(function calc(accumulator,currentValue){
    console.log(accumulator,currentValue)
   return  accumulator + currentValue.price*currentValue.quantity;
}, 0);

console.log(totalPrice);
*/

/**
 * Output :
 *  0 { product: 'Shoes', price: 80, quantity: 1 }
    80 { product: 'Bag', price: 120, quantity: 2 }
    320 { product: 'Watch', price: 250, quantity: 4 }
    1320
 */

const shoppingCart = [
    { product: 'Shoes', price: 80, quantity: 1 },
    { product: 'Bag', price: 120, quantity: 2 },
    { product: 'Watch', price: 250, quantity: 4 }
];

const result = shoppingCart.reduce(function reducer(accumulator, currentValue) {
    console.log(accumulator, currentValue);
    return 10;
} ,0);

console.log(result);

/**
 * Output:
 *  0 { product: 'Shoes', price: 80, quantity: 1 }
    10 { product: 'Bag', price: 120, quantity: 2 }
    10 { product: 'Watch', price: 250, quantity: 4 }
    10
 */


function factorial(num){
    return Array.from({length:num},(_,i)=>i+1).reduce((ans,val) => ans*=val,1)
}
console.log(factorial(5))

//it's like that
// function factorial() { 
//     return [1,2,3,4,5].reduce((acc, val) => acc * val, 1); 
// }

// function factorial() { 
//     return [1,2,3,4,5].reduce(function reducer(acc, val) {
//         return acc * val;
//     }, 1); 
// }

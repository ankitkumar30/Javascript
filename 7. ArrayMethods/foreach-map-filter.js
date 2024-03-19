const arr = [1,2,3,4,5,6];
//Normal way to iterate through the array
// for(let i = 0; i<arr.length ;i++){
//     console.log(`element at index ${i} is ${arr[i]}`)
// }

// // The problem here is we are giving the margin of Human error so to solve it

/**
 * foreach goes to every element of the array, and executes the given callback on that element
 * doesn't return anything
 */

// arr.forEach((x,i) => 
//     console.log(`element at index ${i} is ${x}`) );


//Our own Custom foreach method
/*
function customForEach(a , cb)
{
    for(let i = 0; i<arr.length ;i++){
        cb(arr[i],i);
    }
}

customForEach([1,2,3], (element, idx) => {
    console.log("Element at index ", idx, "is", element);
}); // example of how you will call your function
*/

/**
 * map function retuns us an array 
 * 
 * What is the content of this array ?
 * It is the club of all the return values from the cb
 */

// const newarr = arr.map(x => x*x);
// console.log(newarr)

//reallife example

const products = [{id: 1, name: 'iphone', price: 1000}, {id: 2, name: 'macbook', price: 2000}, {id: 3, name: 'airpods', price: 200}];

/*
const modifiedProducts = products.map( (object) => {
    return {name : object.name, price : object.price}
});
console.log(modifiedProducts)
*/

/*
const oddelements = arr.map((x) => {if(x%2 !=0) return x} // not returning is equal to saying return undefined)
console.log(oddelements)
/**
 * Output:
 * [ 1, undefined, 3, undefined, 5, undefined ]
 */



const modifiedProducts = products.filter((object) => {
    if(object.price <= 1000)
    return {name:object.name,price:object.price};
})
console.log(modifiedProducts)


const oddelements = arr.filter((x) => {if(x%2 !=0) return x})
console.log(oddelements)
/**
 * Output:
 * [ 1, 3, 5 ]
 */
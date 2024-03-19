
/*
function customMap(arr,cb)
{
    let newArray = Array(arr.length);
    for(let i = 0; i<arr.length ; i++)
        newArray[i] = cb(arr[i]);
    return newArray;
}

let arr = customMap([1,2,3,4,5,6], (x)=>{console.log(x)})
console.log(arr)
*/


// const numbers = [1 , -2, 3, -4, 5];
// const positives = numbers.filter(n => {if(n<0) return n})
// console . log(positives)

/*
const numbers = [1 , -2, 3, -4, 5];
const positives = numbers.filter(n => n >= 0)
console . log(positives)
*/


// myAnswer = [[2],[4,6],[8]]

/*
const arrays = [[1,2,3], [4,5,6], [7,8,9]];
const result = arrays.map(arr =>arr.filter(num => num %2 === 0));
console.log(result);
*/

//  output = [ [ 2 ], [ 4, 6 ], [ 8 ] ]


/*
function sumOfSquares(arr){
    
    return arr.reduce((sum,currval) => {
        console.log(sum,currval)
        return sum+=currval*currval
    } , 0);
}

console.log(sumOfSquares([1,2,3,4,5]))
*/

/*
//predicted Output : 9
let sum = 0;
const numbers = [1,2,3,4,5] ;
numbers.forEach((num,index) => {
    if(index % 2 === 0) sum +=num;
});
console.log(sum);
//output is 9
*/

/*
const arrayLike = { length : 5};
const newArray = Array . from(arrayLike, (v,i) => i);
console.log(newArray)
*/

// {odd : [1,3,5], even :[2,4]}

/*
const numbers = [1,2,3,4,5]
const result = numbers.reduce((acc,curr) => {
    if(curr % 2 === 0){
        acc.even.push(curr);}
    else{
        acc.odd.push(curr);
    }
    return acc;   
    }, { odd: [], even: []});
    console.log(result)
*/


/*
const obj = {0: 'a', 1:'b', 2:'c', length:3}
function transform(arrayLikeObj){
    return Array.from(arrayLikeObj)
}
const newarr = transform(obj);
console.log(newarr)
*/

/*
const numbers = [1,2,3,4,5];
numb = numbers.map( num => {
    return num *= 2;
});
console.log(numb)
*/

function sumOfValueOfObjects (arr){
    return arr.filter((obj) => {
        if(obj.name.at(0) == 'a'|| obj.name.at(0) == 'A')
            return obj;
    }).reduce((sum,currval) => sum+=currval.value,0)
}
console.log(sumOfValueOfObjects([{name:'Ankit',value: 5},{name:'ankit',value: 5}]))
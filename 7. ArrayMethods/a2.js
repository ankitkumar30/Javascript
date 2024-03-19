/*
function customFilter(arr,cb){
    const newarr = [];
    for(let i = 0; i<arr.length ;i++) {
        if(cb(arr[i],i)==true)
            newarr.push(arr[i]);
    }
    return newarr;
}

const arr = customFilter([1,2,3,4,5,6],(num,index) => {
    return num%2==0 ; 
})
console.log(arr);
*/

/*
function flattenArray(arr) {
    return arr.reduce((acc, val) => {
        if(Array.isArray(val))  {
            //is Array is boolean which return whether the argument is array or not
           acc =  acc.concat(flattenArray(val));
           //concat function returns a new merged array not make changes in the existing array
        } else {
            acc.push(val);
        }
        return acc;
    }, []);
}
const arr = [[1,2,3],[4,5,6],7,8,9]
console.log(flattenArray(arr))
*/

/*
const data = [1, '2', 3, '4', 5];
const result = data
    .map(item => parseInt(item))
    .filter( item => !isNaN(item))
    .reduce((acc, item) => acc+ item, 0);
console.log(result);
//OutPut = 15
*/

// 4th pending

/*
const obj = { a: 1, b: 2, c:3};
Object.keys(obj).forEach(key => {
    obj[key] *= 2;
});
console.log(obj);

//Output:
{ a: 2, b: 4, c: 6 }
*/

/*
const arrayLike = {0: 'apple', 1: 'banana', 2: 'cherry', length: 3};
const fruits = Array.from(arrayLike, key => ({name : key}));
console . log (fruits);
//Output:
[ { name: 'apple' }, { name: 'banana' }, { name: 'cherry' } ]
*/

//7 pending

/*
const numbers = [1,2,3,4,5,6];
const result = numbers
        .map( num => num*2)
        .filter( num => num %3 === 0)
        .reduce( ( acc, num) => acc+num, 0);
console.log(result);
*/

//9 pending

/*
const strings = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const count = strings.reduce((acc, str) => {
    acc[str] = acc[str] ? ++acc[str] : 1;
    return acc;
}, {});
console.log(count)
*/
Array.from({length : 4},cb=>{})


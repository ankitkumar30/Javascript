/*
x = 10;

// more code  8000 lines
console.log(x);
// somewhere between



// intern by mistake makes the same function
if(true) {
    var x = 20;
    console.log(x);
}

console.log(x);
*/

/*
var compose = function(functions) {
    //Here compose variable have the reference of the function
    //It's returning an another function and on line no - 15 fn variable will have reference of it

    return function(x) {
    // i have to write it in such a way that this fn will give me the desired output
    let it = functions.length-1;
   
    let ans = x;
    while(it>=0){
       ans = functions[it](ans);
        it--;
    }
    return ans;
    }
};


const fn = compose([x => x + 1, x => 2 * x]) 
console.log(fn(4))  // 9
*/

console.log('hello')
function printName(name) {
    setTimeout(()=>{
        console.log('my name is '+name);
    },1000)
}

const message = printName('Aditya')
console.log(message)
console.log('end')

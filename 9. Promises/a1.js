// function blockCode(){
//     for(let i = 0 ;i<10000000000 ; i++){
//         //some task
//     }
// }
// console.log("start")
// blockCode();
// console.log("Done");

//OutPut: A C B
/*
console.log("A") 
setTimeout(() => console.log("B"), 1000);
console.log("C")
*/
//correct

//Output: C A B
/*
setTimeout(() => {
    console.log("A")
    setTimeout(() => console.log("B") , 1000);
}, 1000)
console.log("C")
*/
//correct

//Output : CBA
/*
setTimeout(() => console.log("A"), 3000);
setTimeout(() => console.log("B"), 2000);
setTimeout(() => console.log("C"), 1000);
*/
//Correct

//Output: ACB\
/*
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
*/
//Correct

// 0 1 2 wrong becoz at that moment i will be have value of 3
/*
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
*/
//Correct Answer 333

//Output: A B  C
/*
setTimeout(() => {
    console.log("A");
    setTimeout(() => {
        console.log("B");
        setTimeout(() => console.log("C"), 500);
    }, 1000);
}, 1500);
*/
//Correct

//OutPut: A C B
/*
console.log("A");
setTimeout(() => console.log("B"), 1000);
for(let i = 0; i < 1000000000; i++) {}  // Long loop
console.log("C");
*/
//Correct

// Output: 333
/*
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), i * 1000);
}
*/
//Correct

//OutPut: 0 1 1 2 2 3
/*
for (var i = 0; i < 3; i++) {
    setTimeout((j) => {
        console.log(j);
        setTimeout(() => console.log(j + 1), 1000);
    }, i * 2000, i);
}
*/
// Correct but the nice question

//Output: B3 B3 B3 A C3 C3 C3
/*
setTimeout(() => console.log("A"), 2500);
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log("B" + i);
        setTimeout(() => {
            console.log("C" + i);
        }, i * 500 + 500);
    }, i * 1000);
}
*/

//OutPut : 0 1 2
/*
let count = 0;
setTimeout(() => console.log(count++), 1000);
setTimeout(() => console.log(count++), 2000);
setTimeout(() => console.log(count++), 3000);
*/
// Correct

/*
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000 * i);
}
*/
//0 1 2

/*
for (var i = 0; i < 3; i++) {
    (function(j) {
        setTimeout(() => console.log(j), 2000 * j);
    })(i);
}*/
//Output : 0 1 2

/*
console.log("1");
setTimeout(() => {
    console.log("2");
    setTimeout(() => console.log("3"), 1000);
}, 2000);
setTimeout(() => console.log("4"), 1000);
console.log("5");
*/
//OutPut : 1 5 4 2 3

/*
function first(callback) {
    setTimeout(() => {
        console.log("first");
        callback();
    }, 500);
}
function second() {
    console.log("second");
}
first(second);
*/
//OutPut : first second 
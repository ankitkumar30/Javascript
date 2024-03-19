/*
function calculatecube(num){
    //here num is a parameter
    return num*num*num;
}

console.log(calculatecube(5))
// here 5 is passed as an argument

//if nothing is returned then the function will return undefined

//Q. Write a function to calculate sum of three numbers passed as an argument return the sum as output

function SumofThreeNumbers(num1,num2,num3){
    return num1+num2+num3;
}
console.log(SumofThreeNumbers(3,4,5))
*/
//Write a function to calculate sum of some numbers passed as an argument return the sum as output

/*
function SumofThreeNumbers(){
    //No parameters passed in the function
    let sum = 0
    for(let i= 0; i<arguments.length ;i++){ 
    sum+=arguments[i];
    }
return sum 
}

//variablearguments
console.log(SumofThreeNumbers(3,4,5))
console.log(SumofThreeNumbers())
console.log(SumofThreeNumbers(3,4,51,2,6,7,8,9))

*/

//class home work
/*
1.Palindrome Checker Function

Objective: Write a JavaScript function isPalindrome(str) that checks if a given string str is a palindrome. A palindrome is a word, phrase, number, or other sequences of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization). Example: Input: isPalindrome("racecar") Output: true Input: isPalindrome("hello") Output: false
*/
/*
function isPalindrome(str){
    
    let i =0;
    let j =str.length-1;
    while(i<=j){
        if(str[i]!=str[j]){
        return false;
        }
        i++;
        j--;
    }
    return true;
}

console.log(isPalindrome("ankit"))
*/

/*
Problem 2
FizzBuzz Function

Objective: Implement a function fizzBuzz(n) in JavaScript that prints the numbers from 1 to n. For multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz". Example: Input: fizzBuzz(5) Output: 1, 2, Fizz, 4, Buzz

*/

/*
function fizzbuzz(n){
    // n = parseInt()
    //suppose number is passed in string format
    for(let i = 1 ; i <= n ; i++){
        if(i%3==0 && i%5==0){
            console.log("fizzbuzz")
        }else if(i%3 == 0){
            console.log("fizz")
        }else if(i%5 == 0){
            console.log("buzz")
        }else{
        console.log(`${i}`)
        }
    }
}

fizzbuzz(15)
*/

/*
Problem 3
Factorial Calculator

Objective: Create a JavaScript function calculateFactorial(num) that returns the factorial of a given positive integer num. The factorial of a number is the product of all positive integers less than or equal to that number. Example: Input: calculateFactorial(5) Output: 120 (as 5! = 5 × 4 × 3 × 2 × 1 = 120)
*/

function calculateFactorial(num){
    let result = 1;
    for(num ; num>0 ; num--){
        result *= num;
    }
    return result;
}
console.log(calculateFactorial(5))


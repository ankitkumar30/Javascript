/**
 * Life without IIFE's 
 * Normal Zindagi
 * function downloadScriptFromIdeoneAndPopulateDatabase() {
 * // this was ann old function
 * 
 * console.log("Old function implementation");
 * } 
 * 
 * 
 * // more than 8000 lines of code
 * downloadScriptFromIdeoneAndPopulateDatabase();
 * //Somewhere between
 * 
 * // intern by mistake makes the same function
 * if(true){
 * function downloadScriptFromIdeoneAndPopulateDatabase() {
 *  console.log("New Function created");
 *  }
 * console.log("Calling intern Code")
 * downloadScriptFromIdeoneAndPopulateDatabase();
 * } 
 * 
 * 
 * downloadScriptFromIdeoneAndPopulateDatabase();
 * 
 * by the new declaration of the same fn downloadScriptFromIdeoneAndPopulateDatabase()
 * the global space get polluted means in previous the fn was giving the output of "Old function implementation"
 * 
 * but now when intern by mistake makes the same function and called it , it will output "New function Implementation" but the problem is if we want to again call the old implementation of the same function we can't
 * 
 * bcoz it's get polluted so it's considered as a bad practice of writing code 
 * 
 * so the solution is IIFE which creates an "isolated environment" which scope is till the function called and then all the variable and function declared in it will get discarded
 * 
 * full form is Immediately invoked function expression
 * 
 * it consist of two parts:
 * (i) Grouping Operator ()
 * (ii) Immediately invoked function expression ()
 * 
 * ex-
 * ( () => { 
 * console.log("Ankit kummar")
 * } ) ( );
 * 
 * (function name(){
 * console.log("Ankit kumar")
 * } ) ( );
 * 
 * (function () {
 * console.log("Ankit kuamr") }
 * ) ( );
 * 
 */

// with IIFE's

function downloadScriptFromIdeoneAndPopulateDatabase() {
    // this was an old function

    console.log("Old function implementation");
}


// more code  8000 lines
downloadScriptFromIdeoneAndPopulateDatabase();
// somewhere between

// intern by mistake makes the same function
// To solve this, we can wrap the whole intern's code that can break, into an IIFE      
// Docs: https://developer.mozilla.org/en-US/docs/Glossary/IIFE

( () => {
    function downloadScriptFromIdeoneAndPopulateDatabase() {
        console.log("New function created");
    }
    console.log("Calling intern code")
    downloadScriptFromIdeoneAndPopulateDatabase();
})();


downloadScriptFromIdeoneAndPopulateDatabase();
// so by doing this our problem is resolved i.e. global space is not polluted


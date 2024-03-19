/*
var teacher = "Sanket Singh";

function fun() {
    var teacher = "Anurag";
    content = "JS";
    //in this line since this is not a formal declaration
    //so scope manager will not define it's scope
    //now when 2nd phase will run i.e. execution phase
    //it will look for the scope of "content" in the function fun
    //since it's not present there so it will jump out to the global scope and look for the scope of content
    //now here also it's not found so bcoz it's declared with var variable
    //so js will define it's scope in global i.e autoglobals
    //this is the only concept due to which js get so much hate
    //but after 2015 let and const is introduced in which there was a concept of TDZ
    //TDZ stands for temporal dead zone 

    console.log("hello", teacher);
}

function gun() {
    var student = "Karthik";
    console.log("Welcome to the class", student, "Teacher for your class is", teacher);
}

fun();
gun();

console.log(teacher,content);
//that's why here bcoz content is declared in trhe scope of fun 
//but still it's printing the value without giving any error

*/

var teacher = "Sanket Singh"; // Known to js in global scope

function fun() { // Known to js in global scope
    var teacher = "Anurag"; // Known to js in fun scope
    content = "JS";
    console.log("hello", teacher);
}

function gun() { // Known to js in global scope
    var student = "Karthik"; // Known to js in gun scope
    console.log("Welcome to the class", student, "Teacher for your class is", teacher);
}

console.log(teacher, content); 
//it's showing error
// Sanket Singh, No auto global promotion here
//bcoz now js will not tolerate it 
//bcoz we have neither called the fn 
//so that in execution phase it will come to js asking about the scope of content
//so now this time it's showing error

fun();
gun();

console.log(teacher, content);
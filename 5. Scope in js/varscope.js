/*
var teacher = "Ankit kumar";

function fun() {
    var teacher = "Sanket Singh";
    console.log("Hello",teacher);
}

function gun() {
    var student = "karthik";
    console.log("Welcome to the class",student);
}

fun();
gun();
console.log("Hello",teacher);
console.log("Hello",student);
//it shown error means if there is a function var will have function scope
*/

//var teacher = "Sanket Singh";

function fun() {
    var teacher = "Anurag";
    console.log("Hello", teacher);
}

/*
function gun() {
    var student = "Karthik";
    console.log("Welcome to the class", student, "Teacher for your class is",teacher);

    //here what happens, js engine looks for the scope of teacher in the function scope, since it's not present there so it will jump out to the global scope and search for it ,it's present in the global scope so it printed it's value
}
fun();
gun();

*/


//primitive datatype(Stack)
let name = "Ankit kumar"
const name1= name
name = "ANkit"
console.log(name)
console.log(name1)
//so if we assign with the variable also 
//if we change data of 1st variable
// it will not reflected in other
const age = 20
const isLoggedin = true
const nodeversion = null
let bankBalance = undefined
const buttonid = Symbol("id")
const bigNumber = 123n
const bignumber = BigInt(45)
console.log(bignumber)


//Reference (Non-Primitive data types)
//array
array =  [ 1,
    2,
    "Ankit kumar",
    "Aashish",
    12n,
    true,
    null,
    Symbol("id") ]

// object
object1 = 
{
    name :"ankit",
    branch : "cse",
    class : "B.tech 3rd sem",
    age : 20,
    isLoggedin : true
}

//function
const sayhello = function()
{
    console.log("say hello")
}
sayhello()
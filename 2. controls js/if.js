/*
let score = 110
let life = 3
let bullets = 1000
console.log("Welcome to the PW game")

if(score >= 100 ){
    console.log("You gained a life")
    score-=100
    life++
    let bullets = 2000
    console.log(`Bullets are now ${bullets}`)
}
else{
    console.log("You don't gained a life")
}
console.log(`Your score is ${score} and my life is ${life} and my bullets are ${bullets}`)
*/
let star = "1"
star = parseInt()
if(star==1){
    console.log("poor")
}
else if(star==2){
    console.log("emm, ok")
}
else if(star==3){
    console.log("average")
}
else if(star==4){
    console.log("cool")
}
else if  (star==5){
    console.log("great")
}
else if(star==6){
    console.log("awesome")
}
else if(star==7){
    console.log("Nailed it !!!")
} else{
    console.log("I don't know that rating !!!")
}
//////////////////////////

// const email = "ankitkumar20030730@gmail.com"
// if(email == "ankitkumar20030730@gmail.com"){
// console.log("Please enter your password")
// }
// else{
//     console.log("Please enter your email")
// }

// if(email != ""){
//     console.log("Please enter your password")
// }
// else{
//     console.log("Please enter your email")
// }

// if user provides email, password, then allow login, else ask for 
const email = ""
const password = ""

if(email) {
    if(password){
    console.log("Welcome to the app")
    } else{
        console.log("Enter your password")
    }
} else {
    console.log("Please enter your email")
}
////////////////////////////////
if(email && password) {
    console.log("Welcome to the app")
}else if(email){
    console.log("Enter your passwors")
}else {
    console.log("Enter your email and password")
}
/////////////
const githubLoginToken = ""
const googleLoginToken = ""

if(googleLoginToken || githubLoginToken){
    console.log("Welcome to the app")
}else {
    console.log("Please login to view your account")
}

let age = 21

if(age >= 18){
    console.log("You can get the driving license")
}else{
    console.log("you are not eligible for driving license ");
}

const getDrivingLicense = age>=18 ? "true part" : "false part"


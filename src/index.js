// JavaScript

console.log("Hello World!");

let x = Math.sqrt(100); // 10
let y = Math.sin(Math.PI / 2); // 1

// hypotenuse(a, b) = sqrt(a^2 + b^2)

function hypotenuse (a, b) {
    return Math.sqrt(a ** 2 + b ** 2);
}

// yell(str) = str!

function yell (message) {
    return message + "!";
}

// (String, String) -> String
function joinFancy (msg1, msg2) {
    msg1 = msg1.toUpperCase();
    msg2 = msg2.toUpperCase();
    return msg1 + ".:.<>.:." + msg2;
}

let a = 5;
let str = "hello";
let yellMore = (msg) => msg + "!!!"
let joinFancier = (msg1, msg2) => {
    msg1 = msg1.toUpperCase();
    msg2 = msg2.slice(0, 2);
    return msg1 + "&%&%&%" + msg2;
}

// Oh no! This isn't a "function" in the math sense AT ALL!
// This is called a "procedure" or a "routine".
function doSomeSideEffects () {
    console.log("BOOM"); // effect: print text to the console
    alert("Never use alert in a real site!"); // effect: it interrupts user
    let x = Math.random(); // effect: it generates random nums (not an input)
    console.log("The number was:", x);
    setTimeout(announceWinner, 5000); // effect: it schedules a procedure to run in the future.
}

// Again, not a real "FUNCTION" function, but rather
// a procedure. It does some instructions; it doesn't
// map inputs to outputs.
function announceWinner () {
    alert("YOU'RE A WINNER!")
}

// function OHNO () {
//     OHNO();
// }

// Procedures are still important - you WANT to effect the real
// world SOMEWHERE, but in practice it is good to learn
// how to separate "pure" functions (input -> output)
// from "impure" functions (cause side effects).

//---------------------------------

function increment (x) {
    return x + 1;
}

function double (x) {
    return x * 2;
}

let nums = [1, 2, 3];
//          |  |  |
//        increment on each
//          |  |  |
//         [2, 3, 4]
//          |  |  |
//        double on each
//          |  |  |
//         [4, 6, 8]

console.log(nums.map(increment).map(double))

// Functions being "first class" means that they are values
// which can be saved as variables, put into lists, passed
// as inputs to other functions, and returned from functions
// as outputs.

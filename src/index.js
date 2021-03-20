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

function greets() {
    console.log("hello");
}
greets(); // calling function

// parameters
function greet(name) {
    console.log("hello " + name);
}
greet("sweety"); // argument

//return
function add(a, b) {
    return a + b;
}
let result = add(5, 3);
console.log(result);

function minus(y, x) {
    return y - x;
}
let score = minus(7, 3); 
console.log(score);

function multiply(o, p) {
    return o * p;
}
let calculate = multiply(9, 8);
console.log(calculate);

function divide(k, l) {
    return k / l;
}
let number = divide(56, 2);
console.log(number);

function sum(a, b) {
    return a + b;
}
let jock = sum(9, 7);
console.log(jock);

//scope 
let globalVar = "i am global";

function test() {
    let localVar = "i am local"
    console.log(globalVar);
}
// 2nd code scope
let naame = "global";
function outer() {
    let naame = "outer";

    function inner() {
        let naame = "inner";
        console.log(naame);
    }
    inner();
    console.log(naame);
}
outer();
console.log(naame);

let c = 1;
function demo() {
    let c = 2;
    if (true) {
        let c = 3;
        console.log(c);
    }
    console.log(c);
}
demo();
console.log(c);
let g = "gloval";
function gain() {
    let g = "local";
    console.log(g);
}
gain()
console.log(g);
let h = "global"
function kind() {
    console.log(h);
}
kind();

let s = 6;
function one() {
    let s = 8;
    
    function two() {
        console.log(s);
    }
    two();
}
one();
console.log(s);

// arrow function
const check = (username) => {
    return "hello " + username;
};
console.log(check("sweety"));
const square = (num) => num * num;
console.log(square(5));
const three = (name) => "hi," + name;
console.log(three("raagi"));
const multi = (num) => num * num;
console.log(multi(4));
const additioon = (a, b) => a + b;
console.log(additioon(65, 84));

const checkage = (age) => {
    if (age >= 18) {
        return "adult";
    }
    else {
        return "minor"
    }
};
console.log(checkage(16));
function checkname(myname) {
    console.log("welcome " + myname);
}
checkname("sweety");
function celeb(celebname) {
    console.log("ABHISHAK BACHHAN");
}
celeb();
function greetss(name) {
    console.log("hello " + name);
}
greetss("myself");
function adds(a, b) {
    return a + b;
}
let checks = adds(8, 9);
console.log(checks);
function addd(a, b) {
    return a + b;
}
let checkss = addd(5, 5);
console.log(checkss);
function tests() {
    let x = 37
  return x;
}
console.log(tests());

function demo() {
    let x = 10;
  return x;
 
}
console.log(demo());

function test() {
  let y = 50;
}

function test() {
  let y = 50;
  console.log(y);
}
test();

function grade(marks) {
    if (marks >= 90) {
        return "A"
    }
    else if (marks >= 70) {
        return "B"
    }
    else {
        return "C"
    }
};
console.log(grade(90));
console.log(grade(70));
console.log(grade(50));
// ternary condition use for too many condition
const grades = (marks) =>
    marks >= 90 ? "a" : marks >= 70 ? "b" : "c";
console.log(grades(85));
const cross = (a, b) => a * b;
console.log(cross(8, 3));
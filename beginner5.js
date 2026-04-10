function sayHello() {
    alert("hello sweety");
}
function changeText() {
    document.getElementById("name").innerText = "changed!";
}
function changenum() {
    document.getElementById("num").innerText = "10";
}
let btn = document.getElementById("btn");
btn.addEventListener("click", function() {
    alert("click change");
    document.body.style.backgroundColor = "pink";
});
btn.addEventListener("mouseover", function() {
    console.log("mouse over");
    btn.style.backgroundColor = "blue";
});
btn.addEventListener("mouseout", function() {
    console.log("mouse out");
});
let Button = document.getElementById("click");
Button.addEventListener("click", function() {
    document.getElementById("text").innerText = "ANJALI";
});
Button.addEventListener("click", function() {
    document.body.style.backgroundColor = "yellow";
});
Button.addEventListener("mouseover", function() {
    document.getElementById("text").innerText = "mouse is here";
});
let submit = document.getElementById("submit");
submit.addEventListener("click", function() {
    document.getElementById("file").innerText = "sweety clicked";
    submit.style.color = "red";
});

let input = document.getElementById("main");
let butn = document.getElementById("butn");
let output = document.getElementById("output");
butn.addEventListener("click", function() {
    output.innerText = input.value;
});
let buttn = document.getElementById("mouse");
buttn.addEventListener("mouseover", function() {
    document.body.style.backgroundColor = "green";
});
buttn.addEventListener("mouseout", function() {
    document.body.style.backgroundColor = "white";
});

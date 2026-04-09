let head = document.getElementById("track");
head.innerText = "HOOLIGAN";

let heading = document.getElementById("title");
heading.innerText = "Welcome weety";
heading.style.color = "red";
heading.style.fontSize = "40px";

let p = document.getElementById("para");
p.innerText = "Neww Text";

document.querySelector("#para1").innerText ="hHello Again";

let pp = document.createElement("p");
pp.innerText = "I AM NEW";
document.body.appendChild(pp);

let o = document.createElement("p");
o.innerText = "HERE I AM";
o.style.color = "orange";
document.body.appendChild(o);

let myname = document.getElementById("name");
myname.innerText = "manisha";
myname.style.color = "blue";
let learn = document.getElementById("text");
learn.innerText = "I AM MASTERED JS";
learn.classList.add("text1");
learn.style.color = "green";
let img = document.getElementById("pic");
console.log(img.getAttribute("src"));
img.setAttribute("src", "rm4.jpg");
let change = document.getElementById("change");
console.log(change.getAttribute("src"));
change.setAttribute("src", "jin.jpg");
let link = document.getElementById("link");
link.setAttribute("href", "https://youtube.com");
let input = document.getElementById("name");
input.value ="sweety"; // html default value
let images = document.getElementById("images");
console.log(images.getAttribute("src"));
images.setAttribute("src", "rm4.jpg");
let links = document.getElementById("links");
links.setAttribute("href", "https://instagram.com");
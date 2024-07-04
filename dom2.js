//changing css style of webpage through js "dom2"(node.style)
let divs = document.querySelector("div");
//divs.innerText = "hello";
console.log(divs.innerText);
divs.style.backgroundColor = "purple";

//creating button in javascript and adding it to webpage
let button = document.createElement("button");
button.innerText = "Click Me!!";
console.log(button);

let div = document.querySelector("div");
//append,prepend,after,before
div.append(button);

//removing any tag

let p = document.querySelector("p");
//p.remove();


//.................practice questions................
/*
1.create a button add text click me and add it as the first element of body tag
2.create a p tag in html.give some styling and class.now create a new class in css and try to append this class to the <p> tag.hint: use classlist
*/
//1>
let newbtn = document.createElement("button");
newbtn.innerText = "CLICK ME!!!!";
newbtn.style.backgroundColor = "red";
newbtn.style.color = "white";

let body = document.querySelector("body");
body.prepend(newbtn);

//2>
let parah = document.querySelector("p");
parah.classList.add("newclass");












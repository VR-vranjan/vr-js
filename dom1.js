//accessing HTML through js
//dir access objects of the body
console.dir(document.body);
//.log prints the whole html code
console.log(document.body);
//DOM Manipulation
//accessing html by selector: 
//byid
let heading1=document.getElementById("heading1");
console.dir(heading1);
//byclassname
let headings=document.getElementsByClassName("heading");
console.dir(headings);
console.log(headings);
//by tagname
let parah = document.getElementsByTagName("p");
console.dir(parah);

//selecting by query selector
//byId
let query1 = document.querySelector("#heading1");
console.dir(query1);
//byclassname
let query2 = document.querySelector(".heading");
console.dir(query2);
//bytagname
let query3 = document.querySelector("p");
console.dir(query3);
//selecting all
let query = document.querySelectorAll("p");
console.dir(query);

//properties: set,get,change
//firstly we have to access the tag by id/class,then change its properties
console.log(document.body.style.background = "orange");
//appending
let h3 = document.querySelector(".heading");
console.log(h3.innerText);
h3.innerText = h3.innerText + ".....Happy Learning......";
//making blocks with div
let div = document.querySelectorAll(".box");
div[0].innerText = "first!!";
div[1].innerText = "second!!";
div[2].innerText = "third!!";







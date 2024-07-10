//event handling in js
//added inline js in html file
//now handling events through js

let newbtn = document.querySelector(".b1");
newbtn.ondblclick = () => {
    console.log("button was clicked two times!")
};

let div = document.querySelector("#d1");
div.onmouseover = () => {
    console.log("you r inside div!");
};

//now, adding events through eventlistener!!!
let divs = document.querySelector("#d2");
divs.addEventListener("mouseover", () => {
    console.log("using event listener");
});

//.........practice question..............
//create a toggle button which changes screen color to dark mode when clicked and light mode when clicked again
let togglebtn = document.querySelector("#t1");
let currmode = "light";

togglebtn.addEventListener("click", () => {
    if (currmode === "light") {
        currmode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("div").style.color = "white";
       
    }
    else {
        currmode = "light";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("div").style.color = "black";
       
    }
    console.log(currmode);
});



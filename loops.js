//use of loops to find even numbers 
for (let num = 0; num <= 50; num++){
    if (num % 2 === 0) {
        console.log(num, "is even");
    }
}

//random guess number game

let gameNum = 58;
let guess = prompt("guess a number:");

while (guess != gameNum) {
    guess = prompt("you guessed wrong!!,guess again");
}
console.log("congratulations!!,you guessed it");
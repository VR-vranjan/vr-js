//use of if-else for checking multiple of 5
let num = prompt("enter the number to check:");

if (num % 5 === 0) {
    console.log(num, "is a multiple of 5");
}
else {
    console.log(num, "is NOT a multiple of 5");
}
//use of if-elseif-else

let score = prompt("enter your marks:");
let grade;
if (score >= 90 && score <= 100) {
    grade = "A";
}
else if (score >= 70 && score <= 89) {
    grade = "B";
}
else if (score >= 60 && score <= 69) {
    grade = "C";
}
else if (score >= 50 && score <= 59) {
    grade = "D";
}
else {
    grade = "F";
}
console.log("your grade according to your marks is:", grade);
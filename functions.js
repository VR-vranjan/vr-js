//for each function in arrays.it is a higher order function which uses callback function as a parameter.
//squarring of a number
let array1 = [11, 12, 45, 56, 36];
array1.forEach((val) => {
    console.log(val * val);
});
//map method in arrays: similar to forEach but returns output in a new array
let array2 = ["patna", "pune", "ranchi"];
let newarr = array2.map((city, idx, array2) => {
    return city,idx,array2;
});
console.log(newarr);
console.log(array2);

//square of number by map method
let array3 = [11, 56, 12, 14, 22];
let new2 = array3.map((val2) => {
    return val2 * val2; 
});
console.log(new2);
console.log(array3);//original array remains same

//filter method in arrays: filters the given array according to the condition applied.
//filtering even num from array4
let array4 = [26, 88, 456, 747, 565, 888];
let even = array4.filter((val3) => {
    return val3 % 2 === 0;
});
console.log(even);

//reduce method in array: reduces a big array and produces a single output.
//finding the sum of elements in array using reduce method
let array5 = [1, 2, 3, 4, 5, 6];
let sum = array5.reduce((res, cur) => {
    return res + cur;
});
console.log(sum);

//finding maximum element in an array
let array6 = [11, 85, 5, 4, 96];
let max = array6.reduce((prev, cur) => {
    return prev > cur ? prev : cur;

});
console.log(max);

//........................practice questions on functions .................................................

//1. store the marks of student in an array.filter the marks of students that scored 90+
let marks = [65, 99, 100, 55, 74,90, 85, 91];
let score = marks.filter((val4) => {
    return val4>=90
});
console.log(score);


/*2.take a number input from user .create array,
a. use reduce method to calculate sum of all elements
b. use reduce method to calculate product of all elements(factorial)*/

let n = prompt("enter a number:");
let array7 = [];
for (let i = 1; i <= n; i++){
    array7[i - 1] = i;
}
console.log(array7);
let sum2 = array7.reduce((res, cur) => {
    return res + cur;
});
console.log(sum2);

let prod = array7.reduce((prev, cur) => {
    return prev * cur;
});
console.log(prod);






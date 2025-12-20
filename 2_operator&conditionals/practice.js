// Problems set

// Q1
// give number and check odd or even
// let num = 3;
// if (num % 2 == 0) {
//   console.log("Even Number");
// } else {
//   console.log("odd number");
// }

//Q2
// check value PromiseRejectionEvent, negative or Zero
// let num2 = 0
// if(num2 > 0) {
//     console.log("positive");
// }else if(num2 === 0) {
//     console.log("Zero");
// }else{
//     console.log("negative");

// }

//Q3
// let a = 5;
// let b = 10;

// if (a > b) {
//   console.log(" a is greater than b");
// }else{
//     console.log( " b is greater a");
//     }

//------------

// Q4
// let marks = 65;
// if (marks >= 90) {
//   console.log("A");
// } else if (marks >= 75 && marks <= 89) {
//   console.log("B");
// } else if (marks >= 50 && marks <= 74) {
//   console.log("C");
// } else if (marks < 50) {
//   console.log("Fail");
// }

// Q5
// let age = 17;
// if (age >= 18) {
//   console.log("Eligible");
// } else {
//   console.log("Not eligible");
// }

// Q6
// let isLoggedIn = true;
// let hasPermission = true;

// if (isLoggedIn && hasPermission) {
//   console.log("Access granted");
// } else {
//   console.log("Access denied");
// }

//Q7
// let year = 2000;
// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   // if((year%4==0 && year%100!=0 || year%400===0))
//   console.log("leap year");
// } else {
//   console.log("common year");
// }

// Q8
// let num = 78;
// if (num >= 10 && num <= 50) {
//   console.log("Number is between 10 to 50");
// } else {
//   console.log("Number is out if Range");
// }

// Q9
// let A = 10;
// let B = 5;
// let operator = "%";

// if (operator === "+") {
//   console.log(A + B);
// } else if (operator === "-") {
//   console.log(A - B);
// } else if (operator === "*") {
//   console.log(A * B);
// } else if (operator === "/") {
//   console.log(A / B);
// } else {
//   console.log("Invalid operator");
// }

// Q10
// let A = 101;
// let B = 20;
// let c = 30;

// if (A > B) {
//   console.log("A is greater");
// } else if (B > c) {
//   console.log("B is greater");
// } else {
//   console.log("c is greater ");
// }

// let n = 6;

// if (n % 2 === 0 && n % 3 === 0) {
//   console.log("divisiible by 6");
// } else if (n % 2 === 0) {
//   console.log("Even");
// } else if (n % 3 === 0) {
//   console.log("Divisible by 3");
// } else {
//   console.log("none");
// }

// let marks = 50;
// let bonus = 5;
// marks += bonus;

// if(marks>= 90){
//   console.log("A+" + marks);
// }else if(marks >= 75){
//   console.log("A");
// }else if (marks >= 50) {
//   console.log("B" + marks);
// }else {
//   console.log("fail");
// }

// console.log(marks);

// let num = 15;

// if (num < 0) {
//   console.log("negaitive");
// } else if (num === 0) {
//   console.log("Zero");
// } else if (num > 0 && num >= 10 && num <= 20) {
//   console.log("Small Positive");
// } else if (num > 20) {
//   console.log("large positive");
// }


let isLoggedIn = false;
let hasPermission = false;

if (isLoggedIn && hasPermission) {
  console.log("Access Granted");
} else if(isLoggedIn && !hasPermission){
  console.log("Login Success, No Permission");
}else if(!isLoggedIn && hasPermission) {
  console.log("Error: Not Logged In");
}else if(!isLoggedIn && !hasPermission) {
  console.log("Access denied");
  
}

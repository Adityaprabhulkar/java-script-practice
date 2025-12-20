// Arithmetic operator

// let a = 2;
// let b = 5;
//  a = a + 10;
//  console.log(a + b);
//  console.log(a - b);
//  console.log(a * b);
//  console.log(a / b);
//  console.log(a % b);
//  console.log(a ** b);

// Comparison operators
// console.log(10 > 5); // true
// console.log(10 < 5); // false
// console.log(10 >= 5); // true
// console.log(5 <= 5); // true
// console.log(5 >= 5); // true
// console.log(20 <= 5); // false

// console.log("5" == 5); // true
// console.log("5" === 5); // false
// console.log("5" === "5"); // true
// console.log("5" + 5); // 55

// // let a = 5;

// console.log(5 != 2); // true
// console.log(5 != 5); // false
// console.log(5 != "5"); // true
// console.log("raj" != 5); // true

// Ternary operator
// let age = 25
// let status1 = (age > 18) ? "i can vote" : "i cannot vote";
// console.log(status1);

// let age2 = 5
// let status2 = (age2 > 18) ? "i can vote" : "i cannot vote";
// console.log(status2);
// ---------------------------------------------------------------------
// Logocal oprrator

// let ans = true && true && false;
// console.log(ans);

// let ans = true || true || false;
// console.log(ans);

// let ans = false || false || false;
// console.log(ans);

//  let a = !(true);
// console.log(a);

// and (&&)condition
// let condition1 = 10 > 5 && 2 < 5;

// console.log(condition1);
// let condition2 = 10 > 5 && 2 > 5;
// console.log(condition2);

// let cond2 = 10 > 5 || 2 > 5;
// console.log(cond2);

// let cond3 = 10 > 5 || 2 < 5;
// console.log(cond3);

// let ans = true && "aditya";

// console.log(ans  );

// let b = false || (5 < 2)
// console.log(b);

// console.log(false || 0);

// Bitwiseoperator

// console.log( null ^ null);
// console.log( 3 ^ "aditya");
// console.log( 3 ^ 0);

// console.log(2 & 5);

// Condiional Statement

// if-else

// let age = 65
// if(age >= 18 && age <= 60) {
//     console.log("You are adult");

// }
// else if(age <= 18){
//     console.log("you are kid");

// }
// else if(age > 60){
//     console.log("senior citizen");
// }

// let number = 5
// let age = 67

// if(number == 1) {
//     console.log('A');

// }
// else if(number == 2) {
//     console.log('B');

// }
// else if(number == 3) {
//     console.log('C');

// }
// else if(number == 4) {
//     console.log('D');

// }
// else if(number == 5) {
//     if(age>18) {
//         console.log('can Vote');

//     }
//     console.log('E');
// }
// else  {
//     console.log('F');

// }

// Switch case-------------------------------------------------------------------------

let num = 3

switch(num) {
    case 1: console.log('A');
    break;
    case 2: console.log('B');
    break;
    case 3: console.log('C');
    break;
    case 4: console.log('D');
    break;
    default: console.log('F');
    
    
}

// Template literals
let name = "Aditya"
let boy = "raj"

console.log(`${name} and ${boy} are very good friend `);


let obj = {
    age:25,
    wt:36,
    ht:170,
    greet: () => {
        console.log("hello world");
        
    }
}

console.log(obj.age);
obj.greet()




// const arr = [
//     function(a,b) {
//         return a +b;
//     }, 
//      function(a,b) {
//         return a -b;
//     }, 
//      function(a,b) {
//         return a *b;
//     }, 
// ]

// let first = arr[0]
// let ans = first(5,10)
// console.log(ans);

// let first = arr[1]
// let ans = first(5,10)
// console.log(ans);

// let first = arr[2]
// let ans = first(5,10)
// console.log(ans);



// function solve(number) {
//   return function (number) {
//     return number * number;
//   };
// }

// let ans = solve(5);

// let finalAns = ans(10);

// console.log(finalAns);

// can use as a variable => function expression
// let greet = function() {
//     console.log("Greeting for the day");

// }
// greet();

// function greetMe(greet, fullName) {
//     console.log("Hello", fullName);
//     greet();
// }

// function greet() {
//     console.log("Greeting for the day");

// }

// greetMe(greet, "aditya")

// -----------------------------------{ Hoisting }----------------------

// sayHello()

// let sayHello = function () {
//     console.log("Hello jee kaise ho sare");

// }

// console.log(age);

// const age = 25;

// let age = 25;

// console.log(age);

// console.log(city);

// var city = "mumbai";

// sayMyName("aditya")

//     function sayMyName(name) {
//         console.log(name);

// }

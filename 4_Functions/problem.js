//-------Problem set-------------------

//Q1
// const sum = (a, b) => {
//   let ans = a + b;
//   return ans;
// };

// console.log(sum(3, 4));

// -----------------------
// Q2
// const checkEvenOdd = (num) => {
//      if(num % 2 === 0) {
//         console.log("this is even Number");
//         return true;
//      }else {
//         console.log("this is odd Number");
//         return false;
//      }
//     }

//     console.log(checkEvenOdd(3));

// const even = (num) => {
//      return num % 2 === 0 ? "this is even number" : "this odd number";

// }
//     console.log(even(2));

// -------------------------------

// Q3
// const squareNumber = (num) => {
//     return num **2;
// }

// console.log(squareNumber(6));

// --------------------------------------
// Q4
// const findBigNUmber = (a,b) => {
//     return a > b ? a : b;
// }

// console.log(findBigNUmber(100, 20));

// ------------------------------------
// Q5

// const celsiusToFahrenheit = (celsius) => {
//     return (celsius * 9/5) + 32;
// }

// console.log(celsiusToFahrenheit(0));

// ------------------------------------
// Q6
// let str = "Hello";
//  let vowels = 0
// const countVowels = (str) => {

//     for(let i = 0; i < str.length; i++) {

//         let str = str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u';
//          let vowels = vowels + i;
//         return str
//     }
// }

// console.log(countVowels(str));

// const countVowels = (str) => {
//     let vowels = 0;
//     str = str.toLowerCase();

//     for(let i = 0; i<str.length; i++) {
//         if(
//             str[i] === 'a' ||
//             str[i] === 'e' ||
//             str[i] === 'i' ||
//             str[i] === 'o' ||
//             str[i] === 'u'
//             ) {
//             vowels++
//     }
// }
// return vowels;
// };

// console.log(countVowels("ADITYA"));

// ------------------------------------
// Q7
// const reverseString = (str) => {
//     let ans = str.split('').reverse().join('')
//     return ans;
// }

// console.log(reverseString("javascri"));

// ------------------------------------
//Q8;
// const checkNumber = (num) => {
//     if(num === 0) {
//         console.log("this is zero number");

//     }else if(num > 0){
//         console.log("this is positive Number");

//     }else if(num < 0) {
//         console.log("This is negative Number");

//     }
//      return;
// }

// console.log(checkNumber(-9));

// const checkNumber = (num) => {
//     if(num === 0) return "Zero";
//     else if(num > 0) return "positive";
//     else return "negative";
// }

// console.log(checkNumber(0));

// -------------------------------------
// Q9

// const factorial = (num) => {
//   let fact = 1;
//   for (let i = 1; i <= num; i++) {
//     fact = fact * i;
//   }
//   return fact;
// };

// console.log(factorial(7));

// // ---------------------------------

// // Q10

// const calculator = (a, b, operator) => {
//     switch(operator) {
//         case '+': return a + b;
//         case '-': return  a - b;
//         case '*': return  a * b;
//         case '/': return  a / b;
//         default: return "invalid input";

//     }
//  };

//  console.log(calculator(4, 6, '+'));
// ---------------------------------------------

// const printNumber = (n) => {

//     for (let i = 1; i <= n; i++) {
//         return n
//     }
// console.log(printNumber(5));

// const sumTillN = (n) => {
//     let sum = 0;
//     for (let i = 1; i <= n; i++ ) {
//         sum = sum + i
//     }
//     return sum;
// }

// console.log(sumTillN(9));

// ----------------------------------------------

// const PrintNumber = (n) => {
//     let result = [];
//     for (let i = 1; i <= n; i++) {
//             if(i % 2 === 0)
//             {
//                  result.push(i);
//             }
//     }
//     return result;
// }



// console.log(PrintNumber(10));


// ------------------------------------------------

// const printEvnenNumbers = (n) => {
//     for (let i = 1; i <= n; i++) {
//         if (i % 2 === 0) {
//         console.log(i);
//     }
//   }
// };

// console.log(printEvnenNumbers(10));

// ---------------------------------------------------

// const printOddNumbera = (n) => {
//     let result = [];
//     for (let i = 0; i <= n; i++){
//         if(i % 2 !== 0)
//              {
//             result.push(i)
//         } 
//     }
//     return result;
// };

// console.log(printOddNumbera(10));

const printOddNumber = (n) => {
    for(let i = 0; i <= n; i++) {
        if(i % 2 !== 0) {
            console.log(i);
            
        }
    }
}

printOddNumber(10);


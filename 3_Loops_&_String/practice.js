// Problem set Loops & Strings

// Q1
// print 1 to 10
// for( let i = 1; i <= 10; i++) {
//     console.log(i);
// }
// ---------------------------------------
//Q2
// print 10 to 1 revrse
// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }
// ------------------------------------------
// Q3
// print 1 to 20 even no
// let i = 1;
// while (i <= 20) {
//   if (i % 2 == 0) console.log(i);
//   i++;
// }
// --------------------------------------------

// Q4
// print sum 1 to 10
// let sum = 0
// for (let i = 1; i <= 10; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// --------------------------------------------

//Q5
// print table of 5
// for (let i = 1; i <= 10; i++ ) {
//   console.log(`5 x ${i} = ${5 * i}`);
// }

// --------------------------------------------

// Q6
// let i = 1;
// while(i <= 50) {
//     if(i % 3 == 0)
//         console.log(i);
//     i++
// }
// -------------------------------------------

//Q7
// let str = "Javascript";
// str = str.split('');
// console.log(str);

// let str = "Javascript";
// for( let i = 0; i <= str.length; i++) {
//     console.log(str[i]);
// }

// -------------------------------------------

// Q8
// let num = 1234;
// num = num.toString().split('').reverse().join('');
// // num = num.toString()
// // num = num.split('')
// // num = num.reverse();
// // num = num.join('');
// // num = parseInt(num)
// num = parseInt(num);
// console.log(num);

// ---------------------------------------------------------
//Q9
// get Factorial of 5 
// let fact =1;
// for (let i =1;i<=5;i++) {
//     fact = fact * i;
// }
// console.log(fact);
// --------------------------------------------------------

// Q10
// let str = "education";
// let vowels = 0;
// for(let i = 0; i <= str.length -1; i++) {
//     if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
//         vowels ++
        
//     }
// }
//     console.log(vowels);
// ----------------------------------------------------------

//Q11
// let num = 7;
// if(num % 2 == 0 || num % 7 == 0) {
//     console.log(`${num} is prime number`);
// }else console.log(` ${num} is not a prime no`);

//  sol'n------
// let num = 7;
// let isPrime = true;

// if(num <= 1) {
//     isPrime = false;
// } else {
//     for(let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             isPrime = false;
//             break;
//         }
//     } 
// }

// if (isPrime) {
//     console.log(num + " is a prime number");
    
// }else {
//     console.log(num + " is not a prime number");
    
// }

// let n = 6
// for(let i = 2;i< n ; i++) {
//     if(n % i === 0) {
//         return `${n} is not a prime number`
//     }
// }

//  let  a = 0;
//  let b = 1;

//  console.log(a);
//  console.log(b);

//  for (let i = 3; i <= 10; i++) {
//     let c = a + b;
//     console.log(c);
//     a=b;
//     b=c;
    
//  }

//  let str = "I am learining Javascript";
//  let countSpace = 0;

//  for(let i = 0; i <str.length; i++) {
//     if(str[i] === ' ') {
//         countSpace++
//     }
//  }

//  console.log("Spaces:", countSpace);
 






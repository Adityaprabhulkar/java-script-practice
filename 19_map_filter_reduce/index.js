// =========================={ map  }=========================

// const arr = [5, 1, 3, 2, 6];

// function double(x){
//     return x * 2;
// }

// function tripple(x) {
//     return x * 3;
// }

// function binary(x) {
//     return x.toString(2);
// }

//  const output = arr.map(function binary(x) {
//     return x.toString(2);
// })
//  console.log(output);

// short hand syntax
//  const output = arr.map((x) =>  x.toString(2));

//  console.log(output);

//  const output = arr.map((value)=>{
//     double = value*2
//     return double
//  })

//  console.log(output);

// ========================{filter}========================

// const arr = [5, 1, 3, 2, 6];

// filter odd values

// function isOdd (x){
//    return x % 2;
// }

// function isEven (x){
//    return x % 2 == 0;
// }

// function greaterThan4(x){
//    return x > 4;
// }

// let output = arr.filter(greaterThan4);

// function greaterThan4(x) {
//   return x > 4;
// }

// let output = arr.filter((x) => x > 4);

// console.log(output);

// ========================{ Reduce }========================

const arr = [5, 1, 3, 2, 6];

// sum or max

// function fundSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }

// function findMax(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > max) {
//         max = arr[i]
//     }
//   }
//   return max;
// }

// console.log(findMax(arr));

const output = arr.reduce(function(max, curr) {
    if(curr > max){
        max = curr;
    }
    return max;
}, 0)

console.log(output);


// const output = arr.reduce(function (acc, curr) {
//   acc = acc + curr;
//   return acc;
// }, 0);

// console.log(output);

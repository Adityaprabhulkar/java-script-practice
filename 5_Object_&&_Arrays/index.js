// let obj = {
//     name: "Aditya",
//     age: 25,
//     weight: "167",
//     height: 78,
//     greet: function() {
//         console.log("Hello jee iam in side in obj");

//     }
// };

// for(let key in obj) {
//     console.log(key, " ",obj[key]);

// }

// console.log(obj);
// obj.greet()

// ---------------------- { Array } -------------------------

// let arr = [1, 2, 3, 4, 5, 6]

// let brr = new Array('aditya', 3, true)
// brr.push('Aditya')
// brr.pop()

// brr.shift();
// brr.unshift('Developer')
// brr.push(20)
// brr.push(50)
// brr.push(80)

// // console.log(brr.slice(2, 4))
// brr.splice(1, 0, "React-developer")
// console.log(brr);

// // console.log(brr );

let arr = [10, 20, 30]

// arr.map((number, index) => {
//     console.log(number)
//     console.log(index)

// })

let ansArray = arr.map((number) => {
    return number*number
})

console.log(ansArray);

// let arr = [10, 20, 30,11,21,44,51]

// let newArray = arr.filter((number) => {
//    return number % 2 === 0 ?  true : false
// })

//  console.log(newArray);

// let arr = [10, 20, 30,11,21,44,51];

// let evenArray = arr.filter((number) => {
//     if(number % 2 === 0){
//         return true;
//     }else{
//         return false;
//     }
// });

// console.log(evenArray);

// let arr = [1,2,"Aditya","Developer", null ];

// let newArray = arr.filter((value) => {
//     if(typeof(value) === "string") {
//         return true;
//     }else{
//         return false;
//     }

// })

// console.log(newArray);

// let arr = [10, 20, 30, 40];

// let ans = arr.reduce((acc, current) => {
//     return acc + current;
// })

// console.log(ans);

// let arr = [9,1, 7, 4, 2, 8]

// arr.sort()
// arr.reverse()

// console.log(arr.indexOf(2));
// console.log(arr.find(4));
// let arr = [10, 20, 30]

// let length = arr.length;
// console.log("length: ", length);
// // Traditional loop

// for (let index = 0; index <= arr.length; index++)
//     console.log(arr[index]);

// arr.forEach((value, index) => {
//     console.log("number", value, "index", index);

// })

// let arr = [10,20,30,40]

// for(let value of arr) {
//     console.log(value);

// }

// let fulllName = "Aditya";

// for(let value of fulllName) {
//     console.log(value);

// }

// let arr = [10, 20, 30, 40, 50];

// function getSum(arr) {
//     let len = arr.length;
//     let sum = 0
//     for(let index=0; index<len; index++) {
//         sum = sum + arr[index];
//     }
//         return sum;
// }

// let getSum = (arr) => {
//   let sum = 0;
//   arr.forEach((value) => {
//     sum = sum + value;
//   });
//   return sum;
// };

// let totalSum = getSum(arr);
// console.log(totalSum);

//  let arr = [1, 2, 3, 4, 5, 6]



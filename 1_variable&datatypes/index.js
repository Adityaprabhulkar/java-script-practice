
// var age = 25;

// if(true){
//     console.log(age);
    
// }


// let obj = {
//     name: "aditya",
//     sirName: "prabhulkar"
// }

// console.log(typeof obj);

// let onj1 = [1,2,3,4,5]

// console.log(typeof onj1);


// function adi () {
//     let x = 25
//     return x
    
// }
// console.log(adi())

// {
//     let a = 10
//     console.log(a);
// }

// let a = "adi";
// a = 32;

// console.log(a);

// const b = "suraj"
// b = 35;

// console.log(b);



// Symbol (primitive data types js-ES6 )

let user = {
    name: "alex",
    age: 20
};

let userId = Symbol("userId");
user[userId] = 101;

console.log(user); 
// { name: 'alex', age: 20, Symbol(userId): 101 }

console.log(user[userId]); 
// 101
// access only using Symbol

console.log(user.userId); 
 // undefined
 //you cannot access symbol property in normal way






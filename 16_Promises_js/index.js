// 

// Resolve Promise

// let firstPromise1= new Promise( (resolve, reject ) => {
//     console.log("Aditya");
//     resolve(101);
// });


// Reject Promise

// let firstPromise2 = new Promise( (resolve, reject ) => {
//     console.log("Aditya");
//     reject(new Error("internal server issue"));
// });

// console.log(firstPromise);


// let firstPromise = new Promise((resolve, reject) => {

//         setTimeout(function sayMyName() {
//         console.log("My name is Aditya");
//         resolve(101)
//     }, 5000);

// })

// let promise1 = new Promise((resolve, reject) => {
//     let success = true;
//     if(success) {
//         resolve(10);
//     }
//     else {
//         reject("Internal server error");
//     }
// })

// promise1.then((message) => {
//     console.log("first message: " + message);
//     return 20 
// }).then((message) => {
//     console.log("second msg:" + message);
//     return 30
// }).then((message) => {
//     console.log("third msg:"+ message);
// }).catch((err) => {
//     console.log(err);
    
// }).finally((message) => {
//     console.log("Im finally block i run always");
    
// })
    
    


// promise1.then((message) => {
//     console.log("then ka message is " + message);
    
// }).catch((error) => {
//     console.log("Error: " + error);
    
// })


// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, "First");
// })
// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, "Second");
// })
// let promise3 = new Promise((resolve, reject) => {
//     setTimeout(reject, 4000, "Third");
// })

// Promise.all([promise1, promise2, promise3])
// .then((value) => {
//     console.log(value);
    
// }).catch((err)=> {
//     console.log("err:" + err);
    
// })

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo");
//   }, 3000);
// });

// promise1.then((value) => {
//   console.log(value);
//   // Expected output: "foo"
// });

// console.log(promise1);
// // Expected output: [object Promise]

const url = "https://jsonplaceholder.typicode.com/posts/1";

fetch(url)
    

    .then((Response) => {
        // console.log("get Data ", data);/
        return Response.json();
    })

    .then((data) => {
        console.log("get Data ", data);
    })
    .catch((err) => {
        console.log("error: ", err);
        
    })
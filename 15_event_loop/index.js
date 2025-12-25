function clickMeBtn () {
    console.log("btn was click");
    
}

console.log("start");

setTimeout(function sayHello() {
    console.log("Hello Aditya");
    
}, 5000)

console.log("End");


console.log("start");

setTimeout(() => console.log("Macrotask"), 0)

Promise.resolve().then(() => console.log("microtask"));

console.log("end");




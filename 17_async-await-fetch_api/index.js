// async function getData() {
//     setTimeout(() => {
//         console.log("I am indise set Timeout block");
//     }, 3000)
// }

// let output = getData();

// console.log(output);
// fetch

// async function getData() {

//     //get request - async
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts");
// // parse into json - async
//     let data =  await response.json();
//     console.log(data);
    
// }

// getData()
let url = "https://jsonplaceholder.typicode.com/posts";
async function getData() {
    let response = await fetch(url);
    let data =  await response.json();
    console.log(data);

}

async function postData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/add", {
        method: 'POST',
        userId: 11,
        id: 101,
        title: 'i am aditya',
        body: 'I am software developer'
    })
    let data = await response.json()
    console.log(data);
    
}

async function outputData(){
    await postData()
    await getData()
   
    
}

outputData()
// postData()

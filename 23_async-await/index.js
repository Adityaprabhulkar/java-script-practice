// const p = new Promise((resolve, reject) => {
//     resolve("Promise Resolved Value")
// })

// Always returns a promise
// async function getData() {
//     return p;
// }

// const dataPromise = getData();

// dataPromise.then((res) => console.log(res));

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved Value!!");
//   }, 5000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved Value!!");
//   }, 10000);
// });

// await can only be used in an async function
// async function handlePromise() {
//   console.log("hello world");

//   // js Engine was waiting for promise to resolved
//   const val = await p1;
//   console.log("Namaste Jvascript");
//   console.log(val);

//   const val2 = await p2;
//   console.log("Namaste Jvascript2");
//   console.log(val2);
// }

// handlePromise();

// function getData() {
//     // js Engine will not wait for promise to be resolved
//     p.then((res) => console.log(res));
//     console.log("namste javascript");

// }

// getData()

// const API_URL = "https://api.github.com/users/Adityaprabhulkar";
const API_URL = "https://com/users/Adityaprabhulkar";

// async function handlePromise() {
//   const data = await fetch(API_URL);

//   const jsonValue = await data.json();

//   console.log(jsonValue);

//   // fetch() => Response.json() => jsonValue
// }

// handlePromise();

// async function handlePromise() {
//   try {
//     const data = await fetch(API_URL);
//     const jsonValue = await data.json();
//     console.log(jsonValue);
//   } catch (err) {
//     console.log(err);
//   }
// }

// handlePromise();

async function handlePromise() {
  const data = await fetch(API_URL);
  const jsonValue = await data.json();
  console.log(jsonValue);

  console.log(err);
}

handlePromise().catch((err) => console.log(err));


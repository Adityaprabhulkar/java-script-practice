// ## promise API

// // ==================={Promise.all()}============================
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p1 Sucess"), 3000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p2 success"), 1000);
// //   setTimeout(() => reject("p2 Fail"), 1000);
// });

// const p3 = new Promise((resolve, reject) => {
// //   setTimeout(() => resolve("p3 Sucess"), 2000);
//   setTimeout(() => reject("p3 fail"), 2000);
// });

// Promise.all([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// // ==================={Promise.allsettled()}============================
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p1 Sucess"), 3000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p2 success"), 1000);
// //   setTimeout(() => reject("p2 Fail"), 1000);
// });

// const p3 = new Promise((resolve, reject) => {
// //   setTimeout(() => resolve("p3 Sucess"), 2000);
//   setTimeout(() => reject("p3 fail"), 2000);
// });

// Promise.allSettled([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// // ==================={Promise.race()}============================
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p1 Sucess"), 3000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p2 success"), 5000);
// //   setTimeout(() => reject("p2 Fail"), 1000);
// });

// const p3 = new Promise((resolve, reject) => {
// //   setTimeout(() => resolve("p3 Sucess"), 2000);
//   setTimeout(() => reject("p3 fail"), 2000);
// });

// Promise.race([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// ==================={Promise.any()}============================
const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p1 Sucess"), 3000);
    setTimeout(() => reject("p1 fail"), 3000);  
});

const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p2 success"), 5000);
  setTimeout(() => reject("p2 Fail"), 1000);
});

const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p3 Sucess"), 2000);
  setTimeout(() => reject("p3 fail"), 2000);
});

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
    console.log(err.errors);
    
  });


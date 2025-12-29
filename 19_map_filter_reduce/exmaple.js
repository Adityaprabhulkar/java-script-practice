// ==============================={Example}===============================

const users = [
  { firstName: "Aditya", lastName: "Prabhulkar", age: 26 },
  { firstName: "donald", lastName: "trump", age: 75 },
  { firstName: "elon", lastName: "musk", age: 50 },
  { firstName: "deepika", lastName: "padukone", age: 26 },
];

const output = users.reduce((acc, curr)=> {
    if(curr.age < 30) {
        acc.push(curr.firstName + " : " +curr.age);
    }
    return acc
},[])

console.log(output);


// const output = users.map(x => x.firstName +" " + x.lastName);

// console.log(output);

// { 26 : 2, 75: 1, 50: 1 }
// =========================================================

// const output = users.reduce(function(acc, curr){

//     if(acc[curr.age]){
//         acc[curr.age] = ++acc[curr.age];
//     }else{
//         acc[curr.age] = 1
//     }
//     return acc;

// }, {})

// console.log(output);

// ========================================================

// const output = 
// users.filter((x) => x.age < 30)
// .map((x) => x.firstName);

// console.log(output);

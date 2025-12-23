// Compile time error


//Syntax error
// console.log(1;


//Runtime error
//Reference error
// console.log(x);


// try{
//     console.log("Try block starts here");
//     // error -> reference error
//     console.log(x);
//         console.log("Try block ends here");

    
// }
// catch(err){
//         console.log("I am inside in catch block");
//         console.log("Your error is here", err);
// }
// finally{
//     console.log("I will run every time");
    
// }

// let's create custome error

try{
    //Reference error
    console.log(x);
    
}
catch(err) {
    throw new Error("PLease Declare first then print");
}

// let errorCode = 100;
// if(errorCode == 100) {
//     throw new Error("Invalid Json")
// }
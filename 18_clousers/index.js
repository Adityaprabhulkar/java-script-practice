// ------------##{clousers}--------
let name = "Rahul"
function outerFn() {
    // let name = "aditya";
    function innerFn() {
        // let name = "rohit"
        console.log(name);
    }
    innerFn()
}

outerFn()

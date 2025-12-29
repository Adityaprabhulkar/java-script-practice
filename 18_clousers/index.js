// ------------##{clousers}--------
let name = "Rahul"
function outerFn() {
    {
        let fname = "Aditya ";
    }
    // let name = "aditya";
    function innerFn() {
        // let name = "rohit"
        console.log(fname);
    }
    innerFn()
}

outerFn()

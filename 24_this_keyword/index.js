// # // This key word

const obj2 = {
    a: 20,
    x: function () {
        const y =() => {
            console.log(this);
        };
        y()
    },
};
obj2.x();
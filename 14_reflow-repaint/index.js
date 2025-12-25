// code 1 
const t1 = performance.now();

for(let i = 0; i<=100; i++){
    let para = document.createElement('p');
    para.textContent = "This is para " + i;
    document.body.appendChild(para)
}


const t2 = performance.now();

console.log("total time taken :" + (t2 - t1));

// code 2

const t3 = performance.now();
let mydiv = document.createElement('div');

for(let i = 0;i<=100;i++) {
     let para = document.createElement('p');
    para.textContent = "This is para " + i;
    mydiv.appendChild(para);
}

document.body.appendChild(mydiv)

const t4 = performance.now();

console.log("total time taken :" + (t4 - t3));


let fragment = document.createDocumentFragment();
for(let i =1; i<=100; i++) {
    let para = document.createElement('p');
    para.textContent = "This is para" + i+ "abc";

    //No reflow & No repaint for the beloq line
    fragment.appendChild(para)
}


// below line take 1 Reflow & 1 RePaint
document.body.appendChild(fragment);


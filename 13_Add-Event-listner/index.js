


function textChange(event) {
    console.log(event);
    
    let fpara = document.getElementById("fpara");
    fpara.textContent = " Aditya"
}

let fpara = document.getElementById("fpara");

fpara.addEventListener('click', textChange);

fpara.removeEventListener('click', textChange);

let anchorElement = document.getElementById('fanchor');

anchorElement.addEventListener('click', function(event){
    event.preventDefault();
    anchorElement.textContent = "Click done"
})

let paras = document.querySelectorAll('p');

function alartPara(event) {
    if(event.target.nodeName === 'SPAN')
        alert("You have clicked on para: " + event.target.textContent )
    }

// for(let i = 0; i<paras.length; i++) {
//     let para = paras[i]
//     para.addEventListener('click', alartPara)
// }

let myDiv = document.getElementById('wrapper');

document.addEventListener('click', alartPara)

// function alertpara(event) {
//     alert("You have clicked on para: " + event.target.textContent)
// }

// for


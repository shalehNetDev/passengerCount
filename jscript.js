let count =0;
let countIncrement = document.getElementById("count-el");
function increment(){
    count = count + 1;
    countIncrement.innerText = count;
    // document.getElementById("count-el").innerHTML=count;
}

let saveEl = document.getElementById("save-el");

function save(){
let countstr =" "+ count + " - ";
saveEl.innerText += countstr;
}






let countEL = document.getElementById("count")
let saveEl = document.getElementById("save-El")
let count = 0;

function increment() {
    count += 1
    countEL.textContent = count
 }

 function save(){
    saveEl.innerHTML += count + " - ";
 }
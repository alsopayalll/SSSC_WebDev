let counter = document.getElementById("counter");
let inc = document.getElementById("inc");
let dec= document.getElementById("dec");
let reset = document.getElementById("reset");

let count=0;
inc.addEventListener("click",(e)=>{
    count++;
    counter.innerText= `Current Count = ${count}`;
});

dec.addEventListener("click", (e)=>{
    if(count!=0){
        count--;
    }
    counter.innerText=`Current Count = ${count}`;
});

reset.addEventListener("click",(e)=>{
    count=0;
    counter.innerText=`Current Count = ${count}`;
})
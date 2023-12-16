let master = document.querySelector(".master");
let cd = document.querySelector(".cd");

let inp = document.querySelector("input");
let gnr = document.querySelector("h3");


function x(){
    master.style.display = "none"
    cd.style.display = "block"
    gnr.innerText = `قد شما ${inp.value} سانتی متر است`
}
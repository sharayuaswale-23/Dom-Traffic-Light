let redbtnEl = document.getElementById("redbtn");
let yellowbtnEl = document.getElementById("yellowbtn");
let greenbtnEl = document.getElementById("greenbtn");
let stopbtEl = document.getElementById("stopbt");
let readybtEl = document.getElementById("readybt");
let gobtEl = document.getElementById("gobt");

function stopbtn(){
    redbtnEl.style.backgroundColor = "red";
    stopbtEl.style.backgroundColor = "red";
    yellowbtnEl.style.backgroundColor = "rgb(33, 33, 83)";
    readybtEl.style.backgroundColor = "darkblue";
    greenbtnEl.style.backgroundColor = "rgb(33, 33, 83)";
    gobtEl.style.backgroundColor = "darkblue";
}
function readybtn(){
    redbtnEl.style.backgroundColor = "rgb(33, 33, 83)";
    stopbtEl.style.backgroundColor = "darkblue";
    yellowbtnEl.style.backgroundColor = "yellow";
    readybtEl.style.backgroundColor = "yellow";
    greenbtnEl.style.backgroundColor = "rgb(33, 33, 83)";
    gobtEl.style.backgroundColor = "darkblue";
}
function gobtn(){
    redbtnEl.style.backgroundColor = "rgb(33, 33, 83)";
    stopbtEl.style.backgroundColor = "darkblue";
    yellowbtnEl.style.backgroundColor = "rgb(33, 33, 83)";
    readybtEl.style.backgroundColor = "darkblue";
    greenbtnEl.style.backgroundColor = "green";
    gobtEl.style.backgroundColor = "green";
}
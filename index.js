
var data = 0;


document.getElementById("count").innerText = data;
function increment(){
    data++;
    document.getElementById("count").innerText = data;
   
}

function decrement(){
    data--;
    document.getElementById("count").innerText = data;
        
}

function reset(){
    data = 0;
    document.getElementById("count").innerText = data;
}

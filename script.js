var css = document.getElementById("rgb");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var rndBttn = document.getElementById("rnd");
var hex = document.getElementById("hex");

function inputValue(test1, test2){
    color1.setAttribute("value", test1);
    color2.setAttribute("value", test2);
}

function gradient(){
    body.style.background = "linear-gradient(to right, " + color1.value 	+ ", " + color2.value + ")";
    css.textContent = body.style.backgroundColor + ";";
    hex.textContent = previous;
}

function randomButton(){
    var previous = [];
    test1 = '#' + Math.random().toString(16).slice(2, 8).toUpperCase();
    test2 = '#' + Math.random().toString(16).slice(2, 8).toUpperCase();
    previous.push(test1);
    previous.push(test2);
    body.style.background = "linear-gradient(to right, " + test1 + ", " + test2 + ")"
    css.textContent = body.style.background + ";";
    hex.textContent = previous;
    // inputValue(test1, test2);
    
}

color1.addEventListener("input", gradient); 
color2.addEventListener("input", gradient);
rndBttn.addEventListener("click", randomButton);
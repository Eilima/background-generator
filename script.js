var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var rndBttn = document.getElementById("rnd");

function inputValue(test1, test2){
    color1.setAttribute("value", test1);
    color2.setAttribute("value", test2);
}

function gradient(){
    body.style.background = "linear-gradient(to right, " + color1.value 	+ ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

function randomButton(){
    test1 = '#' + Math.random().toString(16).slice(2, 8).toUpperCase();
    test2 = '#' + Math.random().toString(16).slice(2, 8).toUpperCase();
    body.style.background = "linear-gradient(to right, " + test1 + ", " + test2 + ")"
    css.textContent = body.style.background + ";";
    // inputValue(test1, test2);
    
}

color1.addEventListener("input", gradient); 
color2.addEventListener("input", gradient);
rndBttn.addEventListener("click", randomButton);
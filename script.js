var rbg = document.getElementById("rgb");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var rndBttn = document.getElementById("rnd");
var hex = document.getElementById("hex");

//

function inputValue(test1, test2){
    color1.setAttribute("value", hexVal1);
    color2.setAttribute("value", hexVal2);
}


function gradient(){
    body.style.background = "linear-gradient(to right, " + color1.value 	+ ", " + color2.value + ")";
    rbg.textContent = body.style.backgroundColor + ";";
    hex.textContent = prevColor;
}

// Adds functionality to the "random" button on the page. Randomly generates hex values on every click.

function randomButton(){
    // Creates an array used to store the randomly generated hex values.
    var prevColor = [];
    // Generates and stores 2 hex values using Math.random().
    hexVal1 = '#' + Math.random().toString(16).slice(2, 8).toUpperCase();
    hexVal2 = '#' + Math.random().toString(16).slice(2, 8).toUpperCase();
    // Push generated hex values to the array created at the begining of the function (prevColor).
    previous.push(hexVal1);
    previous.push(hexVal2);
    // Changes the pages background color to the one previously generated.
    body.style.background = "linear-gradient(to right, " + hexVal1 + ", " + hexVal2 + ")"
    // Add the rgb and hex values to the respective tags in the index.html file.
    rbg.textContent = body.style.background + ";";
    hex.textContent = prevColor;
   
    
}

// Adding an event listener to the input buttons in the webpage that "listen" for a input and when a input is selected the function gradient is run.
color1.addEventListener("input", gradient); 
color2.addEventListener("input", gradient);
// Adding an event listener to the button named "Random", which runs the function randomButton on a click to the button.
rndBttn.addEventListener("click", randomButton);
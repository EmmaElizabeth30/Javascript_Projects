//global variable
var globalX= 5;

//function with local variable
function scopeFunc(){
    var localX= "This is a function with a local variable.";
    document.getElementById("output").innerHTML= localX;
}

//date if statement
function newFunc(){
    if (new Date().getHours() < 18) {
    document.getElementById("para").innerHTML= "Hello!";
    }
}

//standard if statement

function nomiSocks() {
    var random= Math.floor(Math.random() * 10);
    if (random < 5) {
        document.getElementById("choice").innerHTML="Your Nomiboy is wearing red socks";
    }
    else{
        document.getElementById("choice").innerHTML="It's blue socks day for Nomi!";
    }
}

//if else statement
function manyNomi(){
    var nomiNumber= document.getElementById("orElse").value;
    if (nomiNumber <=5) {
        document.getElementById("elseOutput").innerHTML= "You need more Nomis!"
    } else{
        document.getElementById("elseOutput").innerHTML= "You are a Nomi hoarder!"
    }
}
//if else statement
function Time_function(){
    var Time= new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0 ) {
        Reply= "It is morning time.";
    } 
    else if (Time >= 12 == Time < 18) {
    Reply= "It is the afternoon.";
    } 
    else {
    Reply= "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML= Reply;
}
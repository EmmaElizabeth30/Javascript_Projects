//teneray function
function Ride_Function(){
    var Height, Can_ride;
    Height= document.getElementById("Height").value;
    Can_ride= (Height< 52)? "You are too short": "You are tall enough";
    document.getElementById("Ride").innerHTML= Can_ride + " to ride"; 
}

//nested function
function Nestfunction(){
document.getElementById("Nested_function").innerHTML= Decrease();
function Decrease(){
    var begin= 10;
    function Minus(){
        begin -=1;
    }
    Minus()
    return begin;
}

}
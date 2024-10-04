
//cocatente function
function Concatenate(){
    var String1= "The rain in Spain ";
    var String2= "Falls mainly ";
    var String3= "On David Blaine.";
    var full= String1.concat(String2, String3);
    document.getElementById("blaine").innerHTML= full; 
}
//slice function
function slice_(){
    var scentence= "It's a great view from The Shard!";
    var selected= scentence.slice(22,28);
    document.getElementById("sliced").innerHTML= selected;
}
//upper case function
function upper_string(){
    var scentence= "i am the shard";
    var edit_string= scentence.toUpperCase();
    document.getElementById("upper").innerHTML= edit_string;
}

//search function
function searching(){
    var string1= "I am the whole damn Shard and nothing but it";
    var final= string1.search("Shard");
    document.getElementById("reveal").innerHTML= final;
}

//toString function
function converting() {
    var number1= 1;
    var stringy= number1.toString();
    document.getElementById("stringing").innerHTML= stringy;
}

//toPrecision function
function precisioning() {
    var number1= 189046.98047;
    var small= number1.toPrecision(4);
    document.getElementById("outputing").innerHTML= small;
}
//toFixed function
function fixing() {
    var number1= 18.9907;
    var small= number1.toFixed();
    document.getElementById("fix1").innerHTML= small;
}
//valueOf function
function valued() {
    var number1= 18;
    var small= number1.valueOf();
    document.getElementById("value1").innerHTML= small;
}
//dictionary function with KVPs
function my_dictionary(){
var cat= {
Name: "Ziggy",
Age: 2,
Colour: "white",
Legs: 3
};
//deleting a KVP
delete cat.Age;
document.getElementById("dictionary").innerHTML= cat.Age;
}

//constructors and classes
function Vehicle(Make, Model, Year, Color){
this.Vehicle_make= Make;
this.Vehicle_model= Model;
this.Vehicle_year= Year;
this.Vehicle_color= Color;
}

var Jack= new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily= new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik= new Vehicle("Ford", "Pinto", 1971, "Mustard");

//constructor function
function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML= 
    "Erik drives a " + Erik.Vehicle.Color + "-colored " + Erik.Vehicle.Model + " manufactured in " + Erik.Vehicle.Year;
}
//for loop
var instruments= ["drum", "kazzoo", "guitar", "tambourine"];
var X;
var instrument_list="";
function for_loop(){
for (X=0; X< instruments.length; X++){
    instrument_list+= instruments[X] + "</br>";
    document.getElementById("list_of_instruments").innerHTML= instrument_list;
}
}
//array function
function array_function(){
    let cats= [];
    cats[0] = "Scampy";
    cats[1] = "Jack";
    cats[2] = "Crinkle";
    cats[3] = "Phyllis";
    cats[4] = "Doris";
document.getElementById("Array").innerHTML= "The name of this cat is " + cats[2] + ".";
    }
    //constants
    const cat= {behaviour: "weird", size: "heckin chonker", color: "black"};
    function const_func(){
        const cat= {behaviour: "weird", size: "heckin chonker", color: "black"};
        cat.size= "O Lawd";
        cat.likes= "drinking dirty pond water like a wierdo"
        document.getElementById("constants").innerHTML= "This boi is a " + cat.size + " who enjoys " + cat.likes + "!";  
       }
    //object with let keyword
    let myCat={
        color: "black",
        age: 16,
        name: "Jack",
        description: function myBoi(){
            return "My cat " + myCat.name + " is a " + myCat.color + myCat.age + " year old boi."; 
        }
    };
    document.getElementById("datBoi").innerHTML= myCat.description;

    //continue loop
    let text= "";
    for (y=0; y<20;y++) {
        if (y===4){
            continue;}
            text+= "This number is " + i + "</br>";
        
    }
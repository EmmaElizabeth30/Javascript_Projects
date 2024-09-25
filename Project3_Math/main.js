//addition function
function addition(){
    var adding= 5+5;
    document.getElementById("Math").innerHTML= adding;
}

//subtraction function
function subtraction(){
    var subtracting= 10-2;
    document.getElementById("Math_subtract").innerHTML+= " " + subtracting;
}

//multiplication function
function multiplication(){
    var multiplying= 5*5;
    document.getElementById("math_multiply").innerHTML= "The result of 5x5 is: " + multiplying;
}

//division function
function division(){
    var division= 10/2;
    document.getElementById("math_divide").innerHTML= "The result of 10 divide by 2 is: " + division;
}

//multiple maths operations
function multiple_math(){
    var multi= (4*2) + 10/2 - 3;
    document.getElementById("manyMath").innerHTML= "A more complex math operation is: " + multi;
}

//modulus function
function modulus(){
    var modulus_math= 10/3;
    document.getElementById("modulus").innerHTML= "The modulus of 10 divided by 3 is " + modulus_math;
}

//negation operator function
function negation(){
    var y = 5
    document.getElementById("math_negate").innerHTML= "The answer is " + -y;
}
//increment function
function increment(){
    x=10
    x++
    document.getElementById("increment").innerHTML= x;
}
//decrement function
function decrement(){
    x=15
    x--
    document.getElementById("decrement").innerHTML= x;
}
//math random function
function random(){
    document.getElementById("random").innerHTML= (Math.random());
}
//math object function
function object(){
    document.getElementById("math_object").innerHTML= Math.floor(6.78);
}

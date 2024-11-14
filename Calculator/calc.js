//This object will keep track of our values
const Calculator= {
        //This will display 0 on the calculator screen
        Display_Value: "0",
        //This will hold the first operand for any expressions. We will set it to null for now.
        First_Operand: null,
        //This checks whether or not the second operand has been inputed by the user:
        Wait_Second_Operand: false,
        //This will hold the operator. We will set it to null for now.
        operator: null, 
};
//This modifies values each time a button is clicked on
function Input_Digit(digit){
    const {Display_Value, Wait_Second_Operand} = Calculator;
    //This checks if the Wait_Second_Operand is true, and sets the Display_Value to the key the user clicks on
    if (Wait_Second_Operand===true){
        Calculator.Display_Value= digit;
        Calculator.Wait_Second_Operand= false;
    } else{
        //This overwrites Display_Value if the current value is 0, otherwise it adds on to it.
        Calculator.Display_Value= Display_Value==="0"? digit : Display_Value + digit;
    }
}
function Input_Decimal(dot){
    //This ensures that accidentally clicking the decimal point does not cause bugs in the operation
    if(Calculator.Wait_Second_Operand===true) return;
    if(!Calculator.Display_Value.includes(dot)){
        //We are saying if Display_Value does not contain a ecimal point, then we will add one
        Calculator.Display_Value += dot;
    }
}
//This section handles operators
function Handle_Operator(Next_Operator){
    const {Display_Value, First_Operand, operator}= Calculator;
    //When an operator key is pressed, we convert the current number displayed on the screen to a number 
    //and then store the result in Calculator.First_Operand if it does not already exist
    const Value_Of_Input= parseFloat(Display_Value);
    //Checks if operator already exists and if Wait_Second_Operand is true, then updates the operator and exits the function
    if(operator && Calculator.Wait_Second_Operand) {
        Calculator.operator= Next_Operator;
        return;
    }
    if(First_Operand== null){
        Calculator.First_Operand= Value_Of_Input;
       
    } else if(operator) { //Checks if an operator already exists
    const Value_Now= First_Operand || 0;
    //If the operator exists, property lookup is performed for the operator in the Perform_Calculation object 
    //and the function that matches the operator executed
    let result= Perform_Calculation[operator](Value_Now, Value_Of_Input);
    //Here we add a fixed amount of numbers after the decimal
    result= Number(result).toFixed(9);
    //This will remove any trailing 0s
    result= (result*1).toString();
    Calculator.Display_Value= parseFloat(result);
    Calculator.First_Operand= parseFloat(result);
    }
    Calculator.Wait_Second_Operand= true;
    Calculator.operator= Next_Operator;
}
const Perform_Calculation= {
    "/": (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    "*": (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    "+": (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    "-": (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    "=": (First_Operand, Second_Operand) => Second_Operand
};
function Calculator_Reset(){
    Calculator.Display_Value="0";
    Calculator.Wait_Second_Operand= false;
    Calculator.First_Operand= null;
    Calculator.operator= null;
}
//This function updates the calculator screen with the content of Display_Value
function Update_Display(){
    //Makes use of the calculator-screen class to target the input tag in the HTML document
    const display= document.querySelector(".calculator-screen");
    display.value= Calculator.Display_Value;
}
Update_Display()
//This section monitors button clicks
const keys= document.querySelector(".calculator-keys");
keys.addEventListener("click", (event) => {
//The target variable is an object that represents the element that was clicked
const {target} = event;
//If the element that was clicked on is not a button, exit the function
if(!target.matches("button")){
    return;
}
if(target.classList.contains("operator")){
    Handle_Operator(target.value);
    Update_Display();
    return;
}
if(target.classList.contains("decimal")){
    Handle_Operator(target.value);
    Update_Display();
    return;
}
//Ensures AC removes all target inputs from the calculator screen
if(target.classList.contains("all-clear")){
    Calculator_Reset();
    Update_Display();
    return;
}
Input_Digit(target.value);
Update_Display();
})
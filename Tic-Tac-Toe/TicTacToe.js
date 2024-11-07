//This variable keps track of who's turn it is
let activePlayer= "x";
//This array stores a number of moves. We need this to determine the win conditions
let selectedSquares= [];
//This function is for placing an "x" or "o" in a square
function placeXOrO(squareNumber){
    //This ensures a square hasn't been selected already
    //The .some() method is used to check each element of the selectedSquares array to see if it contains the square number clicked on.
    if(!selectedSquares.some(element => element.includes(squareNumber))) {
        //This variable retrieves the HTML element that was clicked
        let select= document.getElementById(squareNumber);
        //This condition checks who;s turn it is
        if(activePlayer=== "x"){
            //If active player is "x" then the x.png image is placed in HTML
            select.style.backgroundImage= 'url("Images/x.png")';
            //Active player must only be "x" or "o" so if it is not x then it must be o
        } else{
            //If active player is "o" then the o.png image is placed in HTML
            select.style.backgroundImage= 'url("Images/o.png")';
        }
        //squareNumber and activePlayer are concatenated together and added to array
        selectedSquares.push(squareNumber + activePlayer);
        //This calls a function to check for any win conditions
        checkWinConditions();
        //This condition is for changing the active player
        if(activePlayer=== "x"){
            //If activePlayer is currently "x" then change it to "o"
            activePlayer= "o";
            //if activePlayer is anything other than "x"
        } else{
            //Change active player to "x"
            activePlayer= "x";
        }
        //This function plays placement sound
        audio('./media/place.mp3')
        //This condition checks if it is the computer's turn
        if(activePlayer=== "o"){
            //This function disables clicking for the computer's turn
            disableClick();
            //This function waits for 1 second before the computer places an image and enables click
            setTimeout(function () { computersTurn(); }, 1000);
        }
            //Returning true is needed for our computersTurn() function to work
            return true;
    }
    //This function results in a random square being selected by the computer
    function computersTurn(){
        //This boolean is needed for our while loop
        let success= false;
        //This variable lets us store a random number from 0-8
        let pickASquare;
        //This condiiton allows our while loop to keep trying if a square is selected already
        while(!success){
            //A random number between 0-8 is selected
            pickASquare= String(Math.floor(Math.random() * 9));
            //If the random number returns true, the square has not been selected yet
            if (placeXOrO(pickASquare)){
                //This line calls the function
                placeXOrO(pickASquare);
                //This changes our boolean and ends the loop
                success= true;
            };

        }
    }
}


//This function parses the selectedSquares array to check for any win conditions
//The drawLine() function is used to draw a line on the screen if a condition is met
function checkWinConditions(){
//X 0, 1, 2 condition
if(arrayIncludes("0x", "1x", "2x")) {drawWinLine(50, 100, 558, 100)}
//X 3, 4, 5 condition
else if (arrayIncludes("3x", "4x", "5x")) {drawWinLine(50, 304, 558, 304)}
//X 6, 7, 8 condition
else if (arrayIncludes("6x", "7x", "8x")) {drawWinLine(50, 508, 558, 508)}
//X 0, 3, 6 condition
else if (arrayIncludes("0x", "3x", "6x")) {drawWinLine(50, 50, 100, 558)}
//X 1, 4, 7 condition
else if (arrayIncludes("1x", "4x", "7x")) {drawWinLine(304, 50, 304, 558)}
//X 2, 5, 8 condition
else if (arrayIncludes("2x", "5x", "8x")) {drawWinLine(508, 50, 508, 558)}
//X 6, 4, 2 condition
else if (arrayIncludes("6x", "4x", "2x")) {drawWinLine(100, 508, 510, 90)}
//X 0, 4, 8 condition
else if (arrayIncludes("6x", "4x", "8x")) {drawWinLine(100, 100, 520, 520)}
//o 0, 1, 2 condition
else if(arrayIncludes("0o", "1o", "2o")) {drawWinLine(50, 100, 558, 100)}
//o 3, 4, 5 condition
else if (arrayIncludes("3o", "4o", "5o")) {drawWinLine(50, 304, 558, 304)}
//o 6, 7, 8 condition
else if (arrayIncludes("6o", "7o", "8o")) {drawWinLine(50, 508, 558, 508)}
//o 0, 3, 6 condition
else if (arrayIncludes("0o", "3o", "6o")) {drawWinLine(50, 50, 100, 558)}
//o 1, 4, 7 condition
else if (arrayIncludes("1o", "4o", "7o")) {drawWinLine(304, 50, 304, 558)}
//o 2, 5, 8 condition
else if (arrayIncludes("2o", "5o", "8o")) {drawWinLine(508, 50, 508, 558)}
//o 6, 4, 2 condition
else if (arrayIncludes("6o", "4o", "2o")) {drawWinLine(100, 508, 510, 90)}
//o 0, 4, 8 condition
else if (arrayIncludes("6o", "4o", "8o")) {drawWinLine(100, 100, 520, 520)}
//This condition checks for a tie. If none of the above conditions are met and 9 squares are selected, the code executes
else if(selectedSquares.length >=9){
    //This function plays the tie game sound
    audio('./media/tie.mp3');
    //This function sets a .3 second timer before the game resets
    setTimeout(function () { resetGame(); }, 500);
 }
 //This function checks if an array includes 3 strings. It is used to check for each win condition.
 function arrayIncludes(squareA, squareB, squareC){
    //These 3 variables will be used to check for 3 in a row
    const a= selectedSquares.includes(squareA);
    const b= selectedSquares.includes(squareB);
    const c= selectedSquares.includes(squareC);
    //If the 3 variables we pass are all in our array then true is returned and our else if conditions will execute the drawLines() function
    if(a=== true && b=== true & c=== true) {
        return true;
    }
 }
}

//This function utilizes HTML canvas to draw thw winning lines
function drawWinLine(coordX1, coordX2, coordY1, coordY2){
    //This line accesses our HTML Canvas element
    const canvas= document.getElementById("win-lines");
    //This line gives us access to methods and properties to use on canvas
    const c= canvas.getContext("2d");
    //This line indicates where the start of a line's X axis is
    let x1= coordX1,
    //This line indicates where the start of a line's Y axis is
    x2= coordX2,
    //This line indicates where the end of a line's X axis is
    y1= coordY1,
    //This line indicates where the end of a line's Y axis is
    y2= coordY2,
    //This line stores temporary X axis data whilst we update in our animation loop
    x=x1,
    //This line stores temporary Y axis data whilst we update in our animation loop
    y=y1;

    //This function interracts with the canvas
    function animateLineDrawing(){
        //This variable creates a loop
        const animationLoop= requestAnimationFrame(animateLineDrawing);
        //This method clears content from the last interation of the loop
        c.clearRect(0,0,608,608);
        //This method starts a new path
        c.beginPath();
        //This method moves us to a starting point in our line
        c.moveTo(x1,y1);
        //This method indicates the end point in our line
        c.lineTo(x,y);
        //This method sets the width of our line
        c.lineWidth= 10;
        //This method sets the colour of our line
        c.strokeStyle= "rgba(70, 255, 33, .8)";
        //This method draws everything we laid out above
        c.stroke();
        //This condition checks if we have reached the end points
        if(x1 <=x2 && y1 <=y2){
            //This condition adds 10 to the previous x endpoint
            if(x < x2) {x +=10;}
            //This condition adds 10 to the previous y endpoint
            if(y < y2) {y +=10;}
            //This condition is similar to the one above
            //This is necessary for the 6,4,2 win conditions
            if(x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop);}
        }
        //This condition is similar to the one above
        //This is necessary for the 6,4,2 win condition
        if(x <= x2 && y >= y2){
            if(x < x2) {x += 10};
            if(y > y2) {y -= 10};
            if(x > x2 && y < y2) {cancelAnimationFrame(animationLoop);}
        }
    }
        //This function clears our canvas after the win line is drawn
        function clear(){
            //This line starts our animation loop
            const animationLoop= requestAnimationFrame(clear);
            //This line clears our canvas
            c.clearRect(0,0,608,608)
            //This line stops our animation loop
            cancelAnimationFrame(animationLoop);
        }
        //This line disallows clicking whilst the win sound is playing
        disableClick();
        //This line plays the win sounds
        audio('./media/winGame.mp3');
        //This line calls our main animation loop
        animateLineDrawing();
        //This line waits 1 second, clears the canvas, resets the game, and allows clicking again
        setTimeout(function(){ clear(); resetGame();}, 1000);
}
        //This function resets the game in the event or a tie or a win
        function resetGame(){
            //This for loop iterates through each HTML element
            for(let i=0; i<9; i++){
                //This variable gets the HTML element i
                let square= document.getElementById(String(i));
                //This removes our elements' background image
                square.style.backgroundImage= '';
            }
            //This resets our array so it is empty and we can start over
            selectedSquares= [];
        }

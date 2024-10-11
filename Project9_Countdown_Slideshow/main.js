function countdown(){
    var seconds= document.getElementById("seconds").value; 
    
    function tick(){
        seconds = seconds -1;
        timer.innerHTML= seconds;
        var time= setTimeout(tick, 1000);
        if (seconds ==-1){
            alert("Times Up!");
            clearTimeout(time);
            timer.innerHTML="";
        }

    }
    tick()
}

let slideIndex= 1;
showSlides(slideIndex)

// Next/previous functions
function plusSlides(n){
    showSlides(slideIndex += n)
}
//thumbnail control
function currentSlide(n){
    showSlides(slideIndex =n)
}

function showSlides(n){
let i;
let slides= document.getElementsByClassName("slides");
let dots=   document.getElementsByClassName("dot")
if (n> slides.length){
    slideIndex= 1;
}
if (n < slides.length){
    slideIndex= slides.length;
}
for (i=0; i< slides.length; i++) {
    slides[i].computedStyleMap.display= "none";
}
for (i=0; i< dots.length; i++){
    dots[i].className= dots[i].className.replace("active", "");
}

slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


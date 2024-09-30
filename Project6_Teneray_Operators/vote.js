function ageValidator(){
    var Age, Can_vote;
    Age_number= document.getElementById("age").value;
    Can_vote= (Age_number < 18) ? "You are too young":"You are old enough";
    document.getElementById("canVote").innerHTML= Can_vote + " to vote"; 
}
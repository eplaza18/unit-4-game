$(function(){
    console.log("ready to go");
    //Set variables for values of the page.
    var randomNumber
    var gemOneValue
    var gemTwoValue
    var gemThreeValue
    var gemFourValue
    
    var wins = 0;
    var losses = 0;
    var counter = 0;

    //SEts the value of the variables, operates as 
    function numberReset() {
    
    randomNumber = Math.floor(Math.random() * 70) + 30;
    gemOneValue = Math.floor(Math.random() * 10) + 5;
    gemTwoValue = Math.floor(Math.random() * 7) + 3;
    gemThreeValue = Math.floor(Math.random() * 5) + 3;
    gemFourValue = Math.floor(Math.random() * 3) + 1;
    

    
    
    console.log(randomNumber);
        
        console.log(gemOneValue);
        $('#button1').attr("value", gemOneValue);
        console.log(gemTwoValue);
        $('#button2').attr("value", gemTwoValue);
        console.log(gemThreeValue);
        $('#button3').attr("value", gemThreeValue);
        console.log(gemFourValue);
        $('#button4').attr("value", gemFourValue);
        $("#random-number").text(randomNumber);
    }

    numberReset();
  
    
    
    $(".btn").on('click', function(){
        var buttonValue = ($(this).attr('value'));
        buttonValue = parseInt(buttonValue);
        counter += buttonValue;
        $('#your-score').text(counter);
        console.log(counter);
    
    
    if (counter === randomNumber) {
        
        alert('You Win!');
        wins += 1; 
        $('#wins').text('Wins: ' + wins);
        counter = 0;
        numberReset();
    }

    else if (counter > randomNumber) {
        alert("You Lose!");
        losses += 1;
        $('#losses').text("Losses: " + losses);
        counter = 0;
        numberReset();
    }
})
});
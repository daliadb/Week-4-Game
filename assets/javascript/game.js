// Javascript Code

// Select a random number (between 19-120) for the goal number
$(document).ready(function(){
  var Random=Math.floor(Math.random()*101+19)

  // Appending random number to the randomNumber id in the html doc
  $('#randomNumber').text(Random);

  // Set up random numbers (between 1-12) for each crystal
  var num1= Math.floor(Math.random()*11+1)
  var num2= Math.floor(Math.random()*11+1)
  var num3= Math.floor(Math.random()*11+1)
  var num4= Math.floor(Math.random()*11+1)
  
  // Creat tally variables
  var userTotal= 0; 
  var wins= 0;
  var losses = 0;

  // Create Score Text
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);

  // Reset Game
  function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#randomNumber').text(Random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#finalTotal').text(userTotal);
        } 

  // Add wins to userTotal
  function yay(){
  alert("You're a winner.");
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }

  // Add losses to userTotal
  function loser(){
  alert ("Boo.");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }

// Crystal Clicks
  // First 
  $('#one').on ('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 

        // Set win/lose conditions
          if (userTotal == Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        }   
  });  

  // Second
  $('#two').on ('click', function(){
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 

        // Set win/lose conditions
          if (userTotal == Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        } 
  });

  // Third
  $('#three').on ('click', function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);

        // Set win/lose conditions
          if (userTotal == Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        } 
  }) ;

  // Fourth 
  $('#four').on ('click', function(){
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
      
        // Set win/lose conditions
          if (userTotal == Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        }
  });   
}); 
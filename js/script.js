
$(document).ready(function() {
  var words = [];
  var letters = [];
  var guess = [];
  var guesses = [];
  var splitWord;
  var wordLength = 0;
  var lives = 6 ;
  var playerOneScore = 0;
  var playerTwoScore = 0;
  var category = ["Disney Movie", "Car Brand", "Breakfast Cereal", "WDI-16 Students", "Asian Countries", "Fast Food Chain", "Soda", "Candy"]


//gamestart scores
  $('.scorenum2').html(playerTwoScore)
  $('.scorenum1').html(playerOneScore);

//reset game
  $('.reset').click(function() {
  location.reload();
  });

//generate category randomly
  var randomCategory = category[Math.floor(Math.random() * category.length)];
  $('#showcategory').html(`The category is ${randomCategory}.`);

//show lives at gamestart
  $('.lives').html(`You have ${lives} body parts.`);

//player one enters word
  $('#playerOne .submit').click(function() {
    var wordInput = $('#playerOne .input').val();
    var wordLowerCase = wordInput.toLowerCase();

    words.push(wordLowerCase)
    $('#playerOne .input').val("");
    splitWord = words[0].split("");
    wordLength = splitWord.length;

  //each letter of the word is printed/displayed as underscore
    printLetter();
    function printLetter() {
      for (var i = 0; i < splitWord.length; i++) {
        if (splitWord[i] === " ") {
          wordLength = wordLength - 1;
          letters[i] = "\xa0\xa0"
        }else{
        letters[i] = "_ "
        }
        $('.wordDisplay').append(document.createTextNode(letters[i]));
      }
      console.log(wordLength);
    }
  //disables enter button
    $('#playerOne .submit').attr("disabled", "disabled");
  })

//player two enters letter that gets compared to values of P1's word
  $('#playerTwo .submit').click(function() {
    var guessInput = $('#playerTwo .guess').val();
    var guessLowerCase = guessInput.toLowerCase();

  //same letter input can't be use twice by comparing number of indexOf. returns -1 for empty array.
    if(guess.indexOf(guessLowerCase) > -1) {
      // alert("same");
      $('.message').html(`"${guessInput.toUpperCase()}" already guessed, please try again.`);
    } else{
      // alert("not same continue");
      guess.push(guessLowerCase);

    //letter is compared to array of word. if letter exists: display, if not: lose one life.
      var correct = false;
      var letterNum = 0;
      for (var i = 0; i < splitWord.length; i++) {
        if (splitWord[i] === guessLowerCase) {
          letters[i] = guessLowerCase;
          letterNum = letterNum + 1;
          $('.wordDisplay').html(letters);
           correct = true;
        }
      }
      if(correct) {
        wordLength = wordLength - letterNum;
        // alert(wordLength);

      } else {
        lives = lives - 1
        $('.lives').html(`You have ${lives} body parts left!`);
        // alert("you wrong!!");
      }

      if(wordLength == 0) {
        $('.message').html(`Player Two wins!`)
        playerTwoScore = playerTwoScore + 1;
        $('.scorenum2').html(playerTwoScore);
      }

      if (lives == 0) {
        $('.message').html(`Player One wins!`);
        playerOneScore = playerOneScore + 1;
        $('.scorenum1').html(playerOneScore);
      }
    }

    $('#playerTwo .guess').val("");
  })

  // $('.reset').click(function() {
  //   var words = [];
  //   var letters = [];
  //   var guess = [];
  //   var guesses = [];
  //   var splitWord;
  //   var wordLength = 0;
  //   var lives = 6 ;
  // });



})

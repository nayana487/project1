  var guess = [];
$(document).ready(function() {
  var words = [];
  var letters = [];

  var guesses = [];
  var splitWord;
  var wordLength = 0;
  var lives = 6 ;
  var category = ["Disney Movie", "Car Brand", "Breakfast Cereal", "WDI-16 Students", "Asian Countries", "Fast Food Chain", "Soda", "Candy"]

//reset game
  $('.reset').click(function() {
  location.reload();
  });

//generate category randomly
  var randomCategory = category[Math.floor(Math.random() * category.length)];
  $('#showcategory').html(`The category is ${randomCategory}.`);

//show lives at gamestart
  $('.lives').html(`You have ${lives} body parts left.`);

//player one enters word
  $('#playerOne .submit').click(function() {
    var wordInput = $('#playerOne .input').val();
    words.push(wordInput)
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

    if(guess.indexOf(guessInput) > -1) {
      alert("same");
      $('.message').html(`"${guessInput.toUpperCase()}" already guessed, please try again.`);
    } else{
      alert("no same continue");
      guess.push(guessInput);

      var correct = false;

      for (var i = 0; i < splitWord.length; i++) {
        if (splitWord[i] === guessInput) {

          letters[i] = guessInput;
          $('.wordDisplay').html(letters);
           correct = true;
        }
      }
      if(correct) {
        wordLength = wordLength - 1;
        alert(wordLength);

      } else {
        lives = lives - 1
        $('.lives').html(`You have ${lives} body parts left.`);
        alert("you wrong!!");
      }

      if(wordLength == 0) {
        alert("you win");
      }

      if (lives == 0) {
        $('.message').html(`You lost! Please try again.`);
      }
}

    $('#playerTwo .guess').val("");
  })

})

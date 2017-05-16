
$(document).ready(function() {
  var words = [];
  var letters = [];
  var guess = [];
  var guesses = [];
  var splitWord ;
  var lives = 6 ;
  var category = ["Disney Movie", "Cars", "Breakfast Cereal"]

//show lives
  $('.lives').html(`You have 6 body parts left.`);

//player one enters word and display as dashes
  $('#playerOne .submit').click(function() {
    var wordInput = $('#playerOne .input').val();
    words.push(wordInput)
    $('#playerOne .input').val("");
    splitWord = words[0].split("");

    // var nospace = splitWord.filter(function(entry) {
    //   return entry.trim() != '';
    // });

    for (var i = 0; i < splitWord.length; i++) {
      if (letters[i] === " ") {
        letters[i] = "\xa0\xa0 "
      }else{
      letters[i] = "_ "
      }
    }
    $('.wordDisplay').html(letters);
    console.log(splitWord);
  })

//player two enters letter that gets compared to values of P1's word
  $('#playerTwo .submit').click(function() {
    var guessInput = $('#playerTwo .guess').val();
    guess.push(guessInput)

    for (var i = 0; i < splitWord.length; i++) {
      if (splitWord[i] === guessInput) {
        splitWord[i] = guessInput + " ";
        var correct = true;
        console.log(splitWord[i]);
      }
    }
    $('#playerTwo .guess').val("");

  })

  // function printLetter() {
  //   for (var i = 0; i < splitWord.length; i++) {
  //     $('.wordDisplay').append(document.createTextNode(splitWord[i]));
  //   }
  // }





  //generate words randomly from array of pre-exisiting choices
  // var randomWord = words[Math.floor(Math.random() * words.length)];
  // console.log(randomWord);

  //split each character from the randomly chosen word in an array
  // var splitWord = words[0].split("");
  // console.log(splitWord);
  //
  // //display each characters as _ on body
  // for (var i = 0; i < splitWord.length; i++) {
  //   splitWord[i] = "_ "
  // }
  // $('.display').html(splitWord);
})


$(document).ready(function() {
  var words = [];
  var values = [];

  $('#playerOne .submit').click(function() {
    var wordInput = $('#playerOne .input').val();
    words.push(wordInput)
    console.log(words);
    var splitWord = words[0].split("");
    console.log(splitWord);

    // var nospace = splitWord.filter(function(entry) {
    //   return entry.trim() != '';
    // });

    for (var i = 0; i < splitWord.length; i++) {
      if (splitWord[i] === " ") {
        splitWord[i] = "\xa0\xa0 "
      }else{
      splitWord[i] = "_ "
      }
    }
    $('.wordDisplay').html(splitWord);
  })


  $('#playerTwo .submit').click(function() {
    var guessInput = $('#playerTwo .input').val();
    values.push(guessInput)
    console.log(values);
  })
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

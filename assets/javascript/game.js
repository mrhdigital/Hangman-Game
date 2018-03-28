/*
Press any key to get started
  randomly generate the word from the array for the player
  generate empty lines for that word
  initiate the counters
  Add letter to html if guess was correct
  Add letter to html if guess was wrong
  update counters
        winCount
        lossCount
        guessesRemaining
  display you lost message when wrong Guess counter adds up to 9
  display you win message when all letters guessed correctly 
  After win/lose select the new word

*/

// Divide the code in three sections: Golobal variables, Functions and main processes.
//*************************************************************************************/

//Golobal variables
//**************************************************************************************/

var wordList = [
    "toucan","parrot", "hornbill", 
    "woodpecker","penguin","passerine",
    "heron","cuckoo"]
var wordSelected = "";
var lettersInWord = [];
var numEmptylines = 0;
var makeEmptylines = [];
var wrongLetters = [];


// Game Stats
var guessesRemaining = 9;
var winCount = 0;
var lossCount = 0;


//Functions
//**************************************************************************************/
// write function that selects the word from wordList randomly and store the value in wordSelected
// 
function startGame () {
    wordSelected = wordList[Math.floor(Math.random()*wordList.length)];
    lettersInWord = wordSelected.split("");
    numEmptylines = lettersInWord.length;

    for (i = 0; i< numEmptylines; i++) {
       makeEmptylines.push(" _ ");
    }
    //Show empty lines in html
    document.getElementById("wordToGuess").innerHTML = makeEmptylines.join("");



    // Testing / Debugging
    console.log(wordSelected);
    console.log(lettersInWord);
    console.log(numEmptylines);
    console.log(makeEmptylines);
}

   function checkLetters(letter) {
       var isLetterinWord = false;

       for (var i = 0; i < numEmptylines; i++) {
           if(wordSelected[i] == letter) {
               isLetterinWord = true;
               console.log(isLetterinWord);
       }
    }

    // Find out where in the wordSelected user input letter goes,
    // populate out makeEmptylines array accordingly

    if (isLetterinWord) {
        for (i = 0; i < numEmptylines; i++ ) {
            if (wordSelected[i]== letter) {
                makeEmptylines[i] = letter;
            }
        }
    }
    // if letter was not found in wordSelected array
    if (wrongLetters.indexOf(letter) == -1   && isLetterinWord == false ) {
        wrongLetters.push(letter);
        guessesRemaining--;
    }

   } 


   // function that will populate game statistics for every usee input in html
   function gameStatistics() {
   document.getElementById("wordToGuess").innerHTML = makeEmptylines.join(" ");
   document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");
   document.getElementById("guessesRemain").innerHTML = guessesRemaining;

   // if user wins then update winCount
   if(lettersInWord.toString()  === makeEmptylines.toString()) {
       winCount++;
       alert("Great You Won!");
       document.getElementById("winCounter").innerHTML = winCount;
   }
   // if user lost then update lossCount
    else if (guessesRemaining == 0){
        lossCount++;
        alert("Sorry you lost try again!");
        document.getElementById("lossCounter").innerHTML = lossCount;
    }
   }

//Main Processes
//**************************************************************************************/
startGame();

// Find out user key input
document.onkeyup = function(event) {
      var letterGuessed = String.fromCharCode(event.keyCode).toLocaleLowerCase();
      checkLetters(letterGuessed);
      gameStatistics();

      //Testing / Debugging
      console.log(letterGuessed);
     // console.log(checkLetters);
}

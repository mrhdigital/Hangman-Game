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

//Main Processes
//**************************************************************************************/
startGame();

var remainingGuess = 10;


function Letter(letter){
    this.letter = letter;
    this.correctLetter = "_";
    this.guessedCorrectly = false;


}

Letter.prototype.letterRevealer = function(userGuess){
    (userGuess === this.letter) ? this.correctLetter = userGuess : this.correctLetter = "_";

};

Letter.prototype.letterCheck = function(userGuess){
    if(userGuess === this.letter){
        this.guessedCorrectly = true;
        console.log("Correct!")
    }
    else{
        remainingGuess--;
        console.log(`Incorrect!  You have ${remainingGuess} guesses remaining!`);
    }
};

// var newLetter = new Letter("A");
// newLetter.letterCheck("A");
// newLetter.letterRevealer("A");
// console.log(newLetter);

module.exports = Letter;
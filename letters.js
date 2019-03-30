var remainingGuess = 10;


function Letter(letter){
    this.letter = letter;
    this.correctLetter = "_";
    this.guessedCorrectly = false;
    this.remainingGuess = 10;


}

Letter.prototype.letterRevealer = function(userGuess){
    (userGuess === this.letter) ? this.correctLetter = userGuess : this.correctLetter = "_";

};

Letter.prototype.letterChecker = function(userGuess){
    if(userGuess === this.letter){
        this.guessedCorrectly = true;

    }

};

// var newLetter = new Letter("A");
// newLetter.letterCheck("A");
// newLetter.letterRevealer("A");
// console.log(newLetter);

module.exports = Letter;
//Declare Dependency
var Letter = require('./letters');

//Declare var to track users score and trigger a message
var guessedCorrect = false;
var remainingGuess = 10;


//Constructor takes in word and splits it into an array
function Word (randomWord){
    this.randomWord = randomWord.toLocaleLowerCase();
    this.arrayOfChar = randomWord.toLocaleLowerCase().split("");
    this.arrayOfObjects= [];
    this.charObject();

}

//Method that instantiates an instance for each letter in the word
Word.prototype.charObject = function(){
    this.arrayOfChar.forEach((element, i) =>{
        let letters = new Letter(element);

        this.arrayOfObjects.push(letters)

    })
};

//Method that checks if the users guess is correct
Word.prototype.letterCheck = function(letterGuessed){
    guessedCorrect = false;
    this.arrayOfChar.forEach((element, i)=>{
        if(letterGuessed === element){
            this.arrayOfObjects[i].letterChecker(letterGuessed);
            this.arrayOfObjects[i].letterRevealer(letterGuessed);
            guessedCorrect = true;
        }
    });
    if (guessedCorrect) {
        console.log("Correct!")
    } else{
        remainingGuess--;
        console.log(`Incorrect!  You have ${remainingGuess} guesses remaining!`);
    }


};

//Instantiates the word constructor
//var gameWord = new Word("This is a Test");

//Creating the letter objects
//gameWord.charObject(this.arrayOfChar);


//console.log(gameWord.arrayOfObjects);
//var letterGuessed = "i";
//gameWord.letterCheck(letterGuessed.toLocaleLowerCase());
//console.log(gameWord.arrayOfObjects);

module.exports = Word;
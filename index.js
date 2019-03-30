var wordConstructor = require('./words');
var inquirer = require('inquirer');
const chalk = require('chalk');


//Instantiating word constructor with random word
var newWord = new wordConstructor("example");


var question = [
    {
        type: 'input',
        name: 'User_Letter_Guessed',
        message: "Guess a letter!"
    }
];

function buildBoard (){
    let board = [];
    newWord.arrayOfObjects.forEach((element)=>{
        board.push(element.correctLetter);
    });

    console.log(board.join(" "));
    console.log("\n");
};

function game () {

    inquirer.prompt(question).then((answers) => {

        newWord.letterCheck(answers.User_Letter_Guessed.toLocaleLowerCase());
        //console.log(answers.User_Letter_Guessed);
        //console.log(newWord.arrayOfObjects);

        buildBoard();
       if(newWord.score !== newWord.arrayOfObjects.length  && newWord.remainingGuess > 0) {
           game();
       }

       if(newWord.remainingGuess === 0){
           console.log(chalk.red("You lost.  Try again!"));
       }
       if(newWord.score === newWord.arrayOfObjects.length){
           console.log(chalk.green("You Won!!"));
       }

    });

};
buildBoard();
game();

//TODO: Add Video to portfolio
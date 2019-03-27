var wordConstructor = require('./words');
var inquirer = require('inquirer');

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
    console.log("Word!!!\n");
    console.log(board.join(" "));
    console.log("\n");
};

function game () {

    inquirer.prompt(question).then((answers) => {



        newWord.letterCheck(answers.User_Letter_Guessed.toLocaleLowerCase());
        //console.log(answers.User_Letter_Guessed);
        //console.log(newWord.arrayOfObjects);

        game();
        buildBoard();

    });

};
buildBoard();
game();
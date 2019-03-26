function Word (randomWord){
    this.randomWord = randomWord;
    this.arrayOfChar = randomWord.split("");
    this.arrayOfObjects= [];

}

Word.prototype.charObject = function(arr){
    this.arrayOfChar.forEach((element, i) =>{
        var letters = {new Letter(element)}
        this.arrayOfObject.push(letters)

    })
};


var gameWord = new Word("This is Home");
console.log(gameWord.arrayOfChar);
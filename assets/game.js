var hangmanGameObj = {
    wordList: { 
        acorn: {
            picture: "",
        },
        tree: {
            picture: "",
        },
        nature: {
            picture: "",
        },
    wordsToGuess: Object.keys(hangmanGameObj.wordList), 
    },
};

//instantiate words to pick from
var computerGuess = wordsToGuess[Math.floor(Math.random()*wordsToGuess)];
var displayedWord = computerGuess.replace("_ ");

function replaceWord() {

};

function resetGame() {

};

function charCheck() {

};
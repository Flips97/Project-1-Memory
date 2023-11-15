/*----- constants -----*/
const pokemons = [
    "bulbasaur",
    "charmander",
    "dratini",
    "pikachu",
    "squirtle"
];

/*----- state variables -----*/
let board;
let turn;
let match;
let winner;
let cardSet;

/*----- cached elements  -----*/
const boardEl = document.getElementById('board');
const msgEl = document.querySelector('h2');
const resetGameBtn = document.querySelector('button');
const cards = [... document.querySelectorAll(".card")];



/*----- event listeners -----*/
cards.forEach((card) => card.addEventListener('click', cardClick));



/*----- functions -----*/

init();

function init() {

board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    
];

match = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
turn = 1;
winner = null;
render();
}



function render() {
    renderShuffleCards();
    renderBoard();
    renderMessage();
    renderControls();
}

function renderShuffleCards() {
    cardSet = pokemons.concat(pokemons); //gives me two of each pokemon    
    //shuffle
    for(let i = 0; i < cardSet.length; i++) {
        let m = Math.floor(Math.random() * cardSet.length); //get random index
        //swap
        let temp = cardSet[i];
        cardSet[i] = cardSet[m];
        cardSet[m] = temp;        
    }
    console.log(cardSet);
}

function renderBoard() {
   
};

function renderMessage() {
    
};

function renderControls() {

};

function cardClick(evt) {
    const indexNum = cards.indexOf(evt.target);
    console.log(indexNum)
}
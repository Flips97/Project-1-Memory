/*----- constants -----*/
const pokemons = [
    
]

/*----- state variables -----*/
let board;
let turn;
let winner;


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
        [0, 0, 0, 0, 0], //col 0
        [0, 0, 0, 0, 0], //col 1
    ];
turn = 1;
winner = null;
render();
}

function render() {
    renderBoard();
    renderMessage();
    renderControls();
}

function renderBoard() {
    board.forEach((card, idx) => {
        
    })
};

function renderMessage() {
    
};

function renderControls() {

};

function cardClick(evt) {
    const indexNum = cards.indexOf(evt.target);
    console.log(indexNum)
}
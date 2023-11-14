/*----- constants -----*/


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
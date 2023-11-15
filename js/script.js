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
let faceDown;

/*----- cached elements  -----*/
const boardEl = document.getElementById('board');
const msgEl = document.querySelector('h2');
const resetGameBtn = document.querySelector('button');



/*----- event listeners -----*/
boardEl.addEventListener('click', cardClick);



/*----- functions -----*/

init();

function init() {
    shuffleCards();
    board = createCards();

    turn = 1;
    winner = null;
    render();
}



function render() {    
    renderBoard();
    renderMessage();    
}

function shuffleCards() {
    cardSet = pokemons.concat(pokemons); //gives me two of each pokemon    
    //shuffle
    for(let i = 0; i < cardSet.length; i++) {
        let m = Math.floor(Math.random() * cardSet.length); //get random index
        //shuffle
        let temp = cardSet[i];
        cardSet[i] = cardSet[m];
        cardSet[m] = temp;        
    }
    console.log(cardSet);
}

function createCards() {
    const cards = cardSet.map(pokemon=> {
        return {
            pokemon,
            flipped: false
        }        
    })
    return cards
}

function renderBoard() {
   board.forEach((card, idx) => {
    if(card.flipped) {
        const cardEl = document.getElementById(idx)
        const imgEl = document.createElement('img')
        imgEl.setAttribute("src", "imgs/" + card.pokemon + ".jpg") 
        cardEl.innerHTML = ''
        cardEl.appendChild(imgEl)
    }
    

    
    
   })
};

function renderMessage() {
    
};



function cardClick(evt) {    
    console.log(board[evt.target.id])
    
    // change the card in my board array to be flipped = true
    // then render
}
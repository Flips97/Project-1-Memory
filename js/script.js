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
let winner;
let cardSet;
let firstPick = null;

/*----- cached elements  -----*/
const boardEl = document.getElementById('board');
const msgEl = document.querySelector('h2');
const resetGameBtn = document.querySelector('button');



/*----- event listeners -----*/
boardEl.addEventListener('click', cardClick);
resetGameBtn.addEventListener('click', init);


/*----- functions -----*/

init();

function init() {
    shuffleCards();
    board = createCards();

    turn = 1;
    winner = false;
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
        const cardEl = document.getElementById(idx)
        cardEl.innerHTML = ''
        if(card.flipped) {
            const imgEl = document.createElement('img')
            imgEl.setAttribute("src", "imgs/" + card.pokemon + ".jpg") 
            cardEl.appendChild(imgEl)
        }      
        
    })
};

function renderMessage() {
    if(winner) {
        msgEl.innerText = "Winner! You have matched all the cards!";
    } else if (firstPick === null) {
        msgEl.innerText = "Flip a card and try to match it";
    } else if (firstPick !== null){
        msgEl.innerText = "Now try and match this card to it's pair"
    // } else if (firstPick === board[evt.target.id]) {
    //     msgEl.innerText = "Pair, Nice job";
    // } else {
    //     msgEl.innerText = "No luck, try again"
    } 
    
};



function cardClick(evt) { 
    if(!board[evt.target.id] || board[evt.target.id].flipped) return   
    console.log(board[evt.target.id])    
    board[evt.target.id].flipped = true
    if(firstPick === null) {
        firstPick = board[evt.target.id]
    } else if (firstPick.pokemon === board[evt.target.id].pokemon){ 
        firstPick = null 
        checkWinner()              
    } else {
        boardEl.removeEventListener('click', cardClick)
        setTimeout(function() {
            firstPick.flipped = false;
            board[evt.target.id].flipped = false;
            firstPick = null
            boardEl.addEventListener('click', cardClick)            
            render();
        }, 2000);   
    }    
    render();    
}


function checkWinner() {
    const checkBoard = board.every((card) => card.flipped === true)
    if (checkBoard) {
        winner = true
    }    
}    
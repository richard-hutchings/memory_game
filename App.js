document.addEventListener('DOMContentLoaded', () => {

    //card options
 const cardArray = [
     {
         name: 'gemaquamarine',
         img: 'images/gemaquamarine.png'
     },
     {
        name: 'gemaquamarine',
        img: 'images/gemaquamarine.png'
    },
    {
        name: 'gemdiamond',
        img: 'images/gemdiamond.png'
    },
    {
       name: 'gemdiamond',
       img: 'images/gemdiamond.png'
   },
   {
    name: 'gemquartz',
    img: 'images/gemquartz.png'
   },
   {
   name: 'gemquartz',
   img: 'images/gemquartz.png'
   },
   {
    name: 'Ingotgold',
    img: 'images/Ingotgold.png'
   },
   {
   name: 'Ingotgold',
   img: 'images/Ingotgold.png'
   },
   {
    name: 'Ingotsilver',
    img: 'images/Ingotsilver.png'
   },
   {
   name: 'Ingotsilver',
   img: 'images/Ingotsilver.png'
   },
   {
    name: 'gemruby',
    img: 'images/gemruby.png'
   },
   {
   name: 'gemruby',
   img: 'images/gemruby.png'
   },
   {
    name: 'gem1',
    img: 'images/gem1.png'
   },
   {
   name: 'gem1',
   img: 'images/gem1.png'
   },
   {
    name: 'gem2',
    img: 'images/gem2.png'
   },
   {
   name: 'gem2',
   img: 'images/gem2.png'
   },
   {
    name: 'gem3',
    img: 'images/gem3.png'
   },
   {
   name: 'gem3',
   img: 'images/gem3.png'
   }
 ];

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];

//create game board
function createBoard() {
    for(let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/crown.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipcard)
        grid.appendChild(card)
    }
}

//Check for match Function.
function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if(cardsChosen[0] == cardsChosen[1]) {
        alert('You Have Found A Match!')
        cards[optionOneId].setAttribute('src', 'images/crystalskull.png')
        cards[optionTwoId].setAttribute('src', 'images/crystalskull.png')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/crown.png')
        cards[optionTwoId].setAttribute('src', 'images/crown.png')
        alert('Sorry, Try Again ')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = "Congratulations! You Found them all.";
    }
}

//Flipcard function
function flipcard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}

createBoard();

} )
var mainPage = document.querySelector('.mainPage');
var classicButton = document.querySelector('.classic-button');
var chooseFighterClassic = document.querySelector('.classic')
var difficultButton = document.querySelector('.difficult-button');
var chooseFighterDifficult = document.querySelector('.difficult')
var selectionButtons = document.querySelectorAll('[data-selection]')


var selections = [
  {
    name: 'rock',
    beats: ['scissors', 'lizard']
  },
  {
    name: 'Paper',
    beats: ['rock', 'alien']
  },
  {
    name: 'scissors',
    beats: ['paper', 'lizard']
  },
  {
    name: 'lizard',
    beats: ['paper', 'alien']
  },
  {
    name: 'alien',
    beats: ['scissors', 'rock']
  }
]

// Event Listeners
classicButton.addEventListener('click', showClassicPickFighter);
difficultButton.addEventListener('click',showDifficultPickFighter)


selectionButtons.forEach(selectionButtons => {
  selectionButtons.addEventListener('click', e => {
  var selectionName = selectionButtons.dataset.selection
  var selection = selections.find(selection => selection.name === selectionName)
  makeSelection(selectionName)
  })
})

function makeSelection (selection) {
  var computerSelection = randomSelection()
  console.log(selection)
}

function randomSelection() {
  var randomIndex = Math.floor(Math.random() * selections.length)
  return selections[randomIndex]
}


// Functions
function showClassicPickFighter() {
  mainPage.classList.add('hidden');
  chooseFighterClassic.classList.remove('hidden');
}

function showDifficultPickFighter() {
  mainPage.classList.add('hidden');
  chooseFighterDifficult.classList.remove('hidden');
}

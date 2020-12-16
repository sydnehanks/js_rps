//<button onclick="myFunction()">Click me</button>
const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')

const SELECTIONS = [
  {
    name: 'rock',
    emoji: '✊🏻 ',
    beats: 'scissor'
  },

  {
    name: 'paper',
    emoji: '🤚🏻',
    beats: 'rock'
  },

  {
    name: 'scissor',
    emoji: '✌🏻',
    beats: 'paper'
  }
]

selectionButtons.forEach(selectionButton => {
  selectionButton.addEventListener('click', e => {
    const selectionName = selectionButton.dataset.selection
    const selection = SELECTIONS.find(selection => selection.name === selectionName)
    makeSelection(selectionName)
  })
})


function makeSelection(selection) {
  const computerSelectoin = randomSelection()
  const yourWinner = isWinner(selection, computerSelection)
  const computerWinner = isWinner(computerSelection, selection)

  addSelectionResult(computerSelection, computerWinner)
  addSelectionResult(selection, yourWinner)

  if (yourWinner)incrementScore(yourScoreSpan)
  if (computerWinner)incrementScore(computerScoreSpan)
}

function addSelectionResult(selection, winner) {
  finalColumn.after(div)
  const div = document.createElement('div')
  div.innerText = selection.emoji
  div.classList.add('result-selection')
  if (winner) div.classList.add('winner')
  
}

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name
}


function increamentScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}



function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
  return SELECTIONS[randomIndex]
}
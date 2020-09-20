/**  
Orientation - JS assignment 1
Solution by: [Giang Nguyen]
*/

let flipReuslts, userGuess, allResults, points
const coin = ['head', 'reverse']

init()

function checkUserChoice() {
  const userChoice = document.querySelector('input[name="user-choice"]:checked').value;
  userGuess.push(userChoice)
  console.log('The user choice is', userChoice);
  return userChoice;
}

function displayWins() {
  const wins = document.querySelector('#win-count');
  wins.textContent = points
  return wins
}

function displayResultHistory() {
  const results = document.querySelector('#result-history');
  results.textContent = allResuts
  return results
}

function displayHead() {
  const head = document.querySelector('#head-count');
  head.textContent = flipReuslts.filter(a => a === 'head').length
  return head
}

function displayReverse() {
  const reverse = document.querySelector('#reverse-count');
  reverse.textContent = flipReuslts.filter(a => a === 'reverse').length
  return reverse
}

// Function to allow users to throw coins
function throwCoin() {
  // 1. Record user's choice
  const userChoice = checkUserChoice()

  // 2. Toss coin
  const result = Math.round(Math.random())
  flipReuslts.push(coin[result])
  console.log('The result of throwing coin is', coin[result])
 
  // 2. Show the result
  const coinImage = document.querySelector('#coin-image');
  coinImage.style.display = 'block'
  coinImage.src = `${coin[result]}`+ '.png'

  const resultParagraph = document.querySelector('#result');
  if(userChoice === coin[result]) {
    resultParagraph.textContent = 'Your guess was correct!'
    allResuts.push('Correct')
  } else {
    resultParagraph.textContent = 'Your guess was wrong!' 
    allResuts.push('Wrong')
  }

  // 3. Modify the points
  userChoice === coin[result] ? points += 1 : points

  // 4. Display statistics
  displayWins()
  displayResultHistory()
  displayHead()
  displayReverse()
}

const throwButton = document.querySelector('#throw-button');
throwButton.addEventListener('click', throwCoin);

function init() {
  flipReuslts = [] 
  userGuess = []
  allResuts = []
  points = 0
  document.querySelector('#coin-image').style.display = 'none';
}
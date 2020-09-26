/**  
Orientation - JS assignment 1
Solution by: [Giang Nguyen]
*/

let flipReuslts, userGuess, allResults, points
const coin = ['head', 'reverse']

init()

const throwButton = document.querySelector('#throw-button');
throwButton.addEventListener('click', tossCoin);

// Function to allow users to throw coins
function tossCoin() {
  // 1. Record user's choice
  const userChoice = checkUserChoice()

  // 2. Toss coin
  const result = Math.round(Math.random())
  flipReuslts.push(coin[result])
  console.log('The result of tossing coin is', coin[result])
 
  // 2. Show the result
  const coinImage = document.querySelector('#coin-image');
  coinImage.style.display = 'block'
  coinImage.src = `${coin[result]}.png`

  const resultParagraph = document.querySelector('#result');
  if(userChoice === coin[result]) {
    resultParagraph.textContent = 'Your guess was correct!'
    allResults.push('Correct')
    console.log('Your guess was correct!')
  } else {
    resultParagraph.textContent = 'Your guess was wrong!' 
    allResults.push('Wrong')
    console.log('Your guess was wrong!' )
  }

  // 3. Modify the points
  userChoice === coin[result] ? points += 1 : points

  // 4. Display statistics
  displayWins()
  displayResultHistory()
  displayHead()
  displayReverse()
}

function checkUserChoice() {
  const userChoice = document.querySelector('input[name="user-choice"]:checked').value;
  userGuess.push(userChoice)
  console.log('The user choice is', userChoice);
  return userChoice;
}

function displayWins() {
  const wins = document.querySelector('#win-count');
  wins.textContent = points
  console.log('The amount of win is:', points)
  return wins
}

function displayResultHistory() {
  const results = document.querySelector('#result-history');
  results.textContent = `All results: ${allResults}`

  const flip = document.createElement('p'); 
  flip.innerText = `Filp results: ${flipReuslts}`
  results.appendChild(flip)

  const guess = document.createElement('p')
  guess.innerText = `User guesses: ${userGuess}`
  results.appendChild(guess)
}

function displayHead() {
  const head = document.querySelector('#head-count');
  head.textContent = flipReuslts.filter(a => a === 'head').length
  console.log('The amount of head is:', head.textContent)
  return head
}

function displayReverse() {
  const reverse = document.querySelector('#reverse-count');
  reverse.textContent = flipReuslts.filter(a => a === 'reverse').length
  console.log('The amount of reverse is:', reverse.textContent)
  return reverse
}

function init() {
  flipReuslts = [] 
  userGuess = []
  allResults = []
  points = 0
  document.querySelector('#coin-image').style.display = 'none';
}
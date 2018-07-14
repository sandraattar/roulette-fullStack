// user can make a bet
//how can user make a bet?
//enter amount of money
//press a button
//create a global variable to store the clicked card
let item = document.getElementsByClassName('item')

let wallet = 0

document.getElementById('five').onclick = five
document.getElementById('fifteen').onclick = fifteen
document.getElementById('twenty').onclick = twenty

//function for 5 dollar bet
function five (){
  // This tells us that he is making a $5 bet
  const bet = 5;
  // Store the value of the select tag
  let select = document.getElementById('select').value
  // Store the bet in a pot to show in the DOM
  wallet += 5
  spin(select)
}

//function for 15 dollar bet
function fifteen (){
  // This tells us that he is making a $15 bet
  const bet = 15;
  // Store the value of the select tag
  let select = document.getElementById('select').value
  // Store the bet in a pot to show in the DOM
  wallet += 15
  spin(select)
}
//function for 20 dollar bet
function twenty (){
  // This tells us that he is making a $5 bet
  const bet = 5;
  // Store the value of the select tag
  let select = document.getElementById('select').value
  // Store the bet in a pot to show in the DOM
  wallet += 5
  spin(select)
}
function spin(userChoice) {
  let num = Math.random()
  console.log(num)
  if (num <= .165){
    compare("R1", userChoice)
  }else if(num <= .33){
    compare("B2", userChoice)
  }else if(num <= .495){
    compare("R3", userChoice)
  }else if(num <= .66){
    compare("B4", userChoice)
  }else if(num <=.825){
    compare("R5", userChoice)
  }else{
    compare("B6", userChoice)
  }
}

// User can win or lose
function compare(choice, user){
  // Conditional function
  // Compare user choice to outcome
  if (choice === user){
    displayWinning('You Win!');
  }else{
    displayLosing('You Lose!');
  }
}

//calculate and display the profit for the owner

function displayWinning (msg){
  document.getElementById('wins').innerHTML=msg;
}

function displayLosing (msg){
  document.getElementById('loses').innerHTML=msg;
}

// Challange 1: your age in days
function calculateAgeInDays(){
  let birthYear = prompt('When where you born my good friend?');
  let ageInDays =( 2019 - birthYear) * 365;
  let h2 = document.createElement('h2');
  let textAsnwer = document.createTextNode('You are ' + ageInDays + " days old.");
  h2.setAttribute('id', 'ageInDays');
  h2.appendChild(textAsnwer);
  const flexResult = document.getElementById("flexCont");
  flexResult.innerHTML = "<div id='flex-box-result'></div>";
  document.getElementById('flex-box-result').appendChild(h2)
}

function reset1(){
  document.getElementById('ageInDays').remove()
}

// Challange 2: Random Cat Generator

function catGenerator(){
  let img = document.createElement('img');
  img.src = 'http://thecatapi.com/api/images/get?format=src&type=gif&size=small';
  img.height = 120;
  img.width = 120;
  document.getElementById('randomCats').appendChild(img)
}

function reset2(){
  window.location.reload();
}

// Challange 3: rock, paper scissors

function rpsGame(yourChoice){
  let userChoise = yourChoice.id
  let computerChoice = getComputerChoice()
  console.log(computerChoice)

  let result = desideWinner(userChoise, computerChoice)
  console.log(result)

  let message = finalMessage(result)
  console.log(message)

  rpsFrontEnd(userChoise, computerChoice, message)
}

const getComputerChoice = () => {
  let randNum = Math.floor(Math.random()*3)
  const array = ['rock', 'paper', 'scissors']
  return array[randNum]
}

const desideWinner = (userChoise,computerChoice) => {
  const rpsData = {
    'rock': {'paper': 0, 'rock': 0.5, 'scissors': 1},
    'paper': {'paper': 0.5, 'rock': 1, 'scissors': 0},
    'scissors': {'paper': 1, 'rock': 0, 'scissors': 0.5},
  } 
  return  rpsData[userChoise][computerChoice];
}

const finalMessage = userScore => {
  if(userScore === 0){
    return { message: "You lost!", color: 'red'}
  } 
  else if(userScore === 0.5){
    return { message: "You tied!", color: 'yellow'}
  } 
  else {
    return { message: "You won!", color: 'blue'}
  }
}

const rpsFrontEnd = (userChoise, computerChoice, message) => {
  const imageData = {
    'rock': document.getElementById('rock').src,
    'paper': document.getElementById('paper').src,
    'scissors': document.getElementById('scissors').src,
  }

  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissors').remove();

  const div = document.getElementById('flex-box-rps-div');
  const userImage = document.createElement('div');
  const computerImage = document.createElement('div');
  const h3Result = document.createElement('div');

  h3Result.innerHTML = "<h1 id='h3Result' style = 'color:" + message.color + "'>" + message.message + '</h1>'
  userImage.innerHTML = "<img id='userImage'src='" + imageData[userChoise] + "' height='120' wight='120' style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'/>";
  computerImage.innerHTML = "<img id='computerImage'src='" + imageData[computerChoice] + "' height='120' wight='120' style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'/>";

  div.appendChild(userImage);
  div.appendChild(h3Result);
  div.appendChild(computerImage)
}

function reset3(){
  document.getElementById('h3Result').remove();
  document.getElementById('userImage').remove();
  document.getElementById('computerImage').remove();
  const div = document.getElementById('flex-box-rps-div');
  div.innerHTML = "<img id='rock' src='images/rock.jpg' alt='rock' height='120' wight='120' onclick='rpsGame(this)'/> <br> <img id='paper' src='images/paper.jpg' alt='paper' height='120' wight='120' onclick='rpsGame(this)'/> <br> <img id='scissors' src='images/scissors.jpg' alt='scissors' height='120' wight='120' onclick='rpsGame(this)'/>"
}

// Challange 4: change the color of all buttons

const allButtons = document.getElementsByTagName('button');

const copyAllButtons = [];
for(button of allButtons){
  copyAllButtons.push(button.classList[1])
}

function buttonColorChange(option){
  switch(option.value){
    case 'red':
    buttonsRed();
    break;
    case 'green':
    buttonsGreen();
    break;
    case 'yellow':
    buttonsYellow();
    break;
    case 'blue':
    buttonsBlue();
    break;
    case 'random':
    buttonsRandom();
    break;
    default:
    buttonsReset()
    break;
  }
}

const buttonsRed = () => {
  for(button of allButtons){
    button.classList.remove(button.classList[1]);
    button.classList.add('btn-danger')
  }
}

const buttonsGreen = () => {
  for(button of allButtons){
    button.classList.remove(button.classList[1]);
    button.classList.add('btn-success')
  }
}

const buttonsYellow = () => {
  for(button of allButtons){
    button.classList.remove(button.classList[1]);
    button.classList.add('btn-warning')
  }
}

const buttonsBlue = () => {
  for(button of allButtons){
    button.classList.remove(button.classList[1]);
    button.classList.add('btn-primary')
  }
}

const buttonsReset = () => {
  for(let i = 0; i < allButtons.length; i++){
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add(copyAllButtons[i])
  }
}

const buttonsRandom = () => {
  const colors = ['btn-success', 'btn-primary', 'btn-danger', 'btn-warning']
  for(let i = 0; i < allButtons.length; i++){
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    const randNum = Math.floor(Math.random()*4)
    allButtons[i].classList.add(colors[randNum])
  }
}

// Challange 5: Black Jack

const blackJackGame = {
  you: { string:"you", scorespan: '#userScore', div: '#yourBox', score: 0},
  dealer: { string:"dealer", scorespan: '#dealerScore', div: '#dealerBox', score: 0},
  cards: ['q2','q3','q4','q5','q6','q7','q8','q9','q10','qK','qQ',"qJ", "qA",
  'x2','x3','x4','x5','x6','x7','x8','x9','x10','xK','xQ',"xJ", "xA",
  's2','s3','s4','s5','s6','s7','s8','s9','s10','sK','sQ',"sJ", "sA",
  'k2','k3','k4','k5','k6','k7','k8','k9','k10','kK','kQ',"kJ", "kA"],
  cardsMap : {'q2':2,'q3':3,'q4':4,'q5':5,'q6':6,'q7':7,'q8':8,'q9':9,'q10':10,'qK':10,'qQ':10,"qJ":10, "qA": [1, 11],
  'x2':2,'x3':3,'x4':4,'x5':5,'x6':6,'x7':7,'x8':8,'x9':9,'x10':10,'xK':10,'xQ':10,"xJ":10, "xA": [1, 11],
  's2':2,'s3':3,'s4':4,'s5':5,'s6':6,'s7':7,'s8':8,'s9':9,'s10':10,'sK':10,'sQ':10,"sJ":10, "sA": [1, 11],
  'k2':2,'k3':3,'k4':4,'k5':5,'k6':6,'k7':7,'k8':8,'k9':9,'k10':10,'kK':10,'kQ':10,"kJ":10, "kA": [1, 11] },
  wins: 0,
  loses: 0,
  draws: 0,
  isStand: false,
  tursnOver: false
}

let {you} = blackJackGame;
const {dealer} = blackJackGame;
let {cards} = blackJackGame;
const {cardsMap} = blackJackGame;

const hitSound = new Audio('bjSounds/swish.m4a');
const loseSound = new Audio('bjSounds/aww.mp3');
const winSound = new Audio('bjSounds/cash.mp3');

const randomCard = () =>{
   let randNum = Math.floor(Math.random() * cards.length)
   let randCard = cards[randNum];
   cards.splice(randNum, 1);
   return randCard
}

const blackJackHit = () => {
  let nextCard = randomCard();
  showCard(nextCard, you);
  updateScore(nextCard, you);
  document.querySelector('#standButton').addEventListener('click', dealerLogic);
}

document.querySelector('#hitButton').addEventListener('click', blackJackHit);

const updateScore = (card, activePlayer) =>{
  if(card === "qA" || card === "kA" || card === "sA" ||card === "xA"){
    if(activePlayer.score + cardsMap[card][1] <= 21){
      activePlayer.score += cardsMap[card][1]
    } 
    else {
      activePlayer.score += cardsMap[card][0]
    }
  } 
  else {
    activePlayer.score += cardsMap[card];
  }
  showScore(activePlayer)
}

const showScore = activePlayer => {
  if( activePlayer.score > 21) {
    document.querySelector("#" + activePlayer.string + "Score")
   .textContent = 'Busted!';
   document.querySelector("#" + activePlayer.string + "Score")
   .style.color = 'red';
   document.querySelector('#hitButton').removeEventListener('click', blackJackHit);
  } 
  else if (!isNaN(activePlayer.score)) {
    document.querySelector("#" + activePlayer.string + "Score")
   .textContent = activePlayer.score 
  }
}

function showCard(card, activePlayer){
  if( activePlayer.score <= 21){
    let cardImage = document.createElement('img');
    hitSound.play();
    cardImage.src = 'bjImages/' + card + '.png';
    cardImage.height = '100';
    cardImage.width = '60'
    document.querySelector(activePlayer.div).appendChild(cardImage);
  }
}

function dealerLogic(){
  let nextCard = randomCard();
  showCard(nextCard, dealer);
  updateScore(nextCard, dealer);
  if(dealer.score > 15){
    determinWinner();
    document.querySelector('#dealButton').addEventListener('click', blackJackDeal);
  } 
  else {
    setTimeout(dealerLogic,500)
  }
}

function determinWinner(){
  let winner;
  document.querySelector('#standButton').removeEventListener('click', dealerLogic);
  document.querySelector('#hitButton').removeEventListener('click', blackJackHit);
  // you have scored less or equal to 21
  if(you.score <= 21){
      if(dealer.score < you.score || dealer.score > 21){
      winner = you
    } 
    else if(dealer.score > you.score){
      winner = dealer
    } 
    else if(you.score === dealer.score) {
      winner = undefined
    }
  } // you got busted, scored more then 21
  else if(you.score > 21) {
    if(dealer.score <= 21) {
      winner = dealer
    }
    else if (dealer.score > 21){
      winner = undefined
    } 
  }  
  showResult(winner);
  updateTotalScore(winner)
}

function showResult(winner){
  let message;
  let messageColor;
  let result = document.getElementById('blackJackResult')
  if(winner === you) {
    message = "You have won!";
    messageColor = 'green';
    winSound.play();
  } 
  else if(winner === dealer) {
    message = "You have lost!";
    messageColor = 'red';
    loseSound.play();
  } 
  else {
    message = "You have a draw!";
    messageColor = 'yellow';  
  }
  result.innerHTML = message;
  result.style.color = messageColor
}

function updateTotalScore(winner){
  if(winner === you) {
    blackJackGame.wins ++;
    document.getElementById('wins').innerText = blackJackGame.wins
  } 
  else if(winner === dealer) {
    blackJackGame.loses ++;
    document.getElementById('loses').innerText = blackJackGame.loses
  } 
  else {
    blackJackGame.draws ++;
    document.getElementById('draws').innerText = blackJackGame.draws
  }
}

function blackJackDeal(){
  let youPics = document.querySelector(you.div).querySelectorAll('img');
  for (let picture of youPics){
    picture.remove();
  }
  let dealerPics = document.querySelector(dealer.div).querySelectorAll('img');
  for (let picture of dealerPics){
    picture.remove();
  }
  blackJackGame.cards =  ['q2','q3','q4','q5','q6','q7','q8','q9','q10','qK','qQ',"qJ", "qA",
  'x2','x3','x4','x5','x6','x7','x8','x9','x10','xK','xQ',"xJ", "xA",
  's2','s3','s4','s5','s6','s7','s8','s9','s10','sK','sQ',"sJ", "sA",
  'k2','k3','k4','k5','k6','k7','k8','k9','k10','kK','kQ',"kJ", "kA"],
  cards = blackJackGame.cards;
  you.score = 0;
  dealer.score = 0;
  document.querySelector("#youScore").textContent = you.score;
  document.querySelector("#dealerScore").textContent = dealer.score;
  document.querySelector("#youScore").style.color = 'whitesmoke';
  document.querySelector("#dealerScore").style.color = 'whitesmoke';
  document.getElementById('blackJackResult').innerHTML = "Let's Play"
  document.getElementById('blackJackResult').style.color = "white";
  document.querySelector('#hitButton').addEventListener('click', blackJackHit);
  document.querySelector('#dealButton').removeEventListener('click', blackJackDeal);
}

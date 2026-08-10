// Одна карточка
const productCard = document.querySelector(`.product-card`);
const changeFirstColorCardButton = document.querySelector(`#change-first-card-color-button`);

const redHash = `#00FF00`; // Красный
const pinkHash = `#FFC0CB` // Розовый

changeFirstColorCardButton.addEventListener(`click`, () => {
  productCard.style.backgroundColor = redHash;
})

// Две карточки
const productCards = document.querySelectorAll(`.product-card`);
const changeAllCardColorButton = document.querySelector(`#change-all-card-color-button`);

changeAllCardColorButton.addEventListener(`click`, () => {
  productCards.forEach((cards) => cards.style.backgroundColor = pinkHash)
})



//const openButtonOne = document.querySelector(`#open-google-one`);
//openButtonOne.addEventListener(`click`, () => {
// window.open(`https://google.com`)  
//})


const openButtonTwo = document.querySelector(`#open-google-two`);
openButtonTwo.addEventListener(`click`, openSpam);
function openSpam () {
 const crazy = confirm(`Вы действительно хотите открыть Google.com?`)
 if(crazy === true) {
  window.open(`https://google.com`)
 } else {
  return;
 }
}

const openConfigButton = document.querySelector(`#config-button`);
openConfigButton.addEventListener(`click`, () => outputConsoleLog(`Homework6`));
function outputConsoleLog(message) {
  console.log(message)
  alert(message)
}


const titleHeader = document.getElementsByTagName('h1')[0]
titleHeader.addEventListener('mouseover', function () {
  console.log(titleHeader.textContent);
})

const colorButton = document.querySelector(`#color-button`);
colorButton.addEventListener(`click`, () => {
colorButton.classList.toggle(`green`);
});
























// function randomColor() {
// return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
//}


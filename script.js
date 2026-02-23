 // покраска первой карточки

const recolorFirstCardButton = document.getElementById('recolor-first-card-button')
const firstProductCard = document.querySelector('.product-card')
const blueHashColor = "#0000FF";

recolorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueHashColor;
})

// покраска всех карточек 

const greenHashColor = '#00ff44';

const allProductCard = document.querySelectorAll('.product-card');
const recolorAllCardButton = document.getElementById('recolor-all-card-button');

recolorAllCardButton.addEventListener('click', () => {
  allProductCard.forEach(
    card =>card.style .backgroundColor = greenHashColor
  )
})

// переход на страницу гугл 

const openGoogleButton = document.getElementById('open-google-button');
openGoogleButton.addEventListener('click', openGoogle);

function openGoogle(){
  const answer = confirm ('Вы действительно хотите перейти на сайт Google?')
  
  if(answer === true) {
    window.open('https://google.com')
  } else {
    console.log('Пользователь отменил переход на Google')
  }
}
// Изменить цвет кнопки

const changeColorButton = document. getElementById('change-color-button');
changeColorButton.addEventListener('click', () => {
  const yellowHashColor = '#FFFF00';
  changeColorButton.style.backgroundColor=yellowHashColor;
})

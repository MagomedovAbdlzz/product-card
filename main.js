// Покраска первой карточки
const firstProductCard = document.querySelector('.product-card');
const btnFirstCard = document.querySelector('#btn-first-card');
const lightPurpleColour = '#e8e8f0';

btnFirstCard.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = lightPurpleColour;
});

// Перекрашивание всех карточек
const allProductCards = document.querySelectorAll('.product-card');
const btnAllCards = document.querySelector('#btn-all-cards');
const darkPurpleColour = '#515076';

btnAllCards.addEventListener('click', () => {
  allProductCards.forEach((card) => {
    card.style.backgroundColor = darkPurpleColour;
    card.style.color = '#fff';
  });
});

// Открытие Google
const btnGoogle = document.querySelector('#btn-google');

btnGoogle.addEventListener('click', function() {
  const answer = confirm('Уверен?');
  
  if (answer === true) {
    window.open('https://www.google.com');
  }
});

// Консоль лог и alert
const btnLog = document.querySelector('#btn-log');

btnLog.addEventListener('click', function() {
  alert('Сё чётка');
  console.log('Сё чётка');
});

// Вывод текста заголовка при наведении 
const catalogTitle = document.querySelector('.products__title');

catalogTitle.addEventListener('mouseover', function() {
  console.log(catalogTitle.textContent);
});

// Кнопка, меняет цвет 
const btnToggle = document.querySelector('#btn-toggle');

btnToggle.addEventListener('click', function() {
  btnToggle.classList.toggle('btn--active');
});
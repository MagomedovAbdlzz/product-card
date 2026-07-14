// Покраска первой карточки
const firstProductCard = document.querySelector('.product-card');
const firstCardBtn = document.querySelector('#btn-first-card');
const lightPurpleColour = '#e8e8f0';

firstCardBtn.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = lightPurpleColour;
});

// Перекрашивание всех карточек
const allProductCards = document.querySelectorAll('.product-card');
const allCardsBtn = document.querySelector('#btn-all-cards');
const darkPurpleColour = '#515076';

allCardsBtn.addEventListener('click', () => {
  allProductCards.forEach((card) => {
    card.style.backgroundColor = darkPurpleColour;
    card.style.color = '#fff';
  });
});

// Открытие Google
const googleBtn = document.querySelector('#btn-google');

googleBtn.addEventListener('click', function() {
  const answer = confirm('Уверен?');
  
  if (answer === true) {
    window.open('https://www.google.com');
  }
});

// Консоль лог и alert
const logBtn = document.querySelector('#btn-log');

logBtn.addEventListener('click', function() {
  alert('Сё чётка');
  console.log('Сё чётка');
});

// Вывод текста заголовка при наведении 
const catalogTitle = document.querySelector('.products__title');

catalogTitle.addEventListener('mouseover', function() {
  console.log(catalogTitle.textContent);
});

// Кнопка, меняет цвет 
const toggleBtn = document.querySelector('#btn-toggle');

toggleBtn.addEventListener('click', function() {
  toggleBtn.classList.toggle('btn--active');
});
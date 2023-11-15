let currentIndex = 0;
const cards = document.querySelectorAll('.cards');
const totalCards = cards.length;

function showPrevious() {
  currentIndex = (currentIndex - 1 + totalCards) % totalCards;
  updateVisibility();
}

function showNext() {
  currentIndex = (currentIndex + 1) % totalCards;
  updateVisibility();
}

function updateVisibility() {
  cards.forEach((card, index) => {
    card.style.display = index === currentIndex ? 'block' : 'none';
  });
}

const body = document.body;
  
function toggleDarkMode() {
    body.classList.toggle('light-mode');
}

// Show the first card initially
updateVisibility();

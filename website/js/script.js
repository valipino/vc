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
  body.classList.toggle('dark-mode');
}
// Show the first card initially
updateVisibility();


let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();
});

function menuBtnChange(){
  if(sidebar.classList.contains("open")){
    closeBtn.classList.replace("fa-solid fa-bars", "fa-solid fa-bars-staggered");
  } else {
    closeBtn.classList.replace("fa-solid fa-bars-staggered", "fa-solid fa-bars");
  }
}

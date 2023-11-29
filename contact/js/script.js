function toggleDarkMode() {
  // Select the body element
  var body = document.body;

  // Toggle the 'light-mode' class on the body
  body.classList.toggle('light-mode');

  console.log("Aufgerufen");
}


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

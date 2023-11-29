function toggleDarkMode() {
  // Select the body element
  var body = document.body;

  // Toggle the 'light-mode' class on the body
  body.classList.toggle('light-mode');
}


let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();
});


function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    $("#btn").removeClass("fa-bars").addClass("fa-bars-staggered");
  } else {
    $("#btn").removeClass("fa-bars-staggered").addClass("fa-bars");
  }
}

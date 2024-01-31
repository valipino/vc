
function toggleDarkMode() {
  // Select the body element
  var body = document.body;

  // Toggle the 'light-mode' class on the body
  body.classList.toggle('light-mode');

}

// Show the first card initially

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

var words = ['a computer science student.', 'a software engineer.', 'a tutor for Java Programming.', 'a experienced radio journalist.', 'a Team Player.'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});
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
  
  
  function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
      $("#btn").removeClass("fa-bars").addClass("fa-bars-staggered");
    } else {
      $("#btn").removeClass("fa-bars-staggered").addClass("fa-bars");
    }
  }


const track = document.getElementById("image-track");

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}

window.onmousemove = e => {
    if(track.dataset.mouseDownAt=== "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
          maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
          nextPercentage = Math.max(Math.min(parseFloat(track.dataset.prevPercentage)+percentage, 0),-100);

    track.dataset.percentage = nextPercentage;

    track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
    }, {duration: 1200, fill: "forwards"})


    for(const image of track.getElementsByClassName("image")){
        image.animate({
            objectPosition: `${100+nextPercentage}% center`
        }, {duration: 1200, fill: "forwards"})
        
    }
}



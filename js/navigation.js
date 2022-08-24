// NAVIGATION FUNCTION

function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  // END OF NAVIGATION FUNCTION
  
  const btnClickMenu = document.querySelector(".clickOpen");
  
  btnClickMenu.addEventListener("click", function () {
    editNav();
  });
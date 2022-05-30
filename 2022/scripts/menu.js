//  when the menu icon is clicked, toggle the menu.
function toggleMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

//  when an anchor link is clicked, close the menu.
  function closeMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav responsive") {
      x.className = "topnav";
    } 
}

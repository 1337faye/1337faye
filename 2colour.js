window.addEventListener("scroll", scrollnav);
if (window.innerHeight < 800){
    var scroll = window.innerHeight - 250
    console.log("Non mobile device detected, Scroll height (Viewport height - 250px)")
    } else {
        var scroll = window.innerHeight - 250
        console.log("Mobile device detected, Scroll height (Viewport height - 150px)")
    }


console.log(scroll)
function scrollnav() {
  var y = window.scrollY;
  if (y > scroll) {
    document.getElementById("section1").style.backgroundColor = "rgb(100 100 230)";
    document.getElementById("section1").style.borderRadius = "(30px)";
  } else {
    document.getElementById("section1").style.backgroundColor = "rgb(30 41 59)";
  }
}

console.log("test");
document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById("loader");
    loader.style.opacity = 1;

    function fadeOut() {
      loader.style.opacity -= 0.1;
      if (loader.style.opacity <= 0) {
        loader.style.display = "none";
      } else {
        setTimeout(requestAnimationFrame(fadeOut), 500);
      }
    }

    setTimeout(fadeOut, 500);
  });
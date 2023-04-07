const showOnPx = 100;
const backToTopButton = document.querySelector("topbutton")

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("opacity-0")
    backToTopButton.classList.add("pointer-events-auto")
    backToTopButton.classList.remove("pointer-events-none")


  } else {
    backToTopButton.classList.add("opacity-0")
    backToTopButton.classList.add("pointer-events-none")
    backToTopButton.classList.remove("pointer-events-auto")
  }
})
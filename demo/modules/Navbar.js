let bottomNav = document.querySelector(".bottom-nav"),
  richArea = document.querySelector(".rich-area"),
  slideTrigger = document.querySelector(".slide-trigger");

slideTrigger.addEventListener("click", slideUp);

function slideUp() {
  slideTrigger.classList.toggle("active");

  if (slideTrigger.classList.contains("active")) {
    bottomNav.style.height = "100%";
    richArea.style.opacity = "1";
    slideTrigger.children[0].style.transform = "rotate(180deg)";
    bottomNav.addEventListener("transitionend", () => {
      richArea.style.opacity = "1";
    });
  } else {
    bottomNav.style.height = "50px";
    slideTrigger.children[0].style.transform = "rotate(0deg)";
    bottomNav.addEventListener("transitionend", () => {
      richArea.style.opacity = "0";
    });
  }
};

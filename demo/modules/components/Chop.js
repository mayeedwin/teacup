const items = document.querySelectorAll(".acc button");
const desc = document.querySelector(".acc_panel");

export const Chop = () => {
  // const items = document.querySelectorAll(".accordion a");
  function toggleAccordion() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("active");
  }
  items.forEach(item => item.addEventListener("click", toggleAccordion));
};

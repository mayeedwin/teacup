import { choppies } from "./data/Data.js";
import { Chop } from "./modules/components/Chop.js";

choppies.forEach(choppy => {
  // call each component
  Chop(choppy);
});

// adding toggling
const items = document.querySelectorAll(".accordion button");
const desc = document.querySelector(".acc_panel");

// toggle navigation
function toggleAccordion() {
  this.classList.toggle("active");
  this.nextElementSibling.classList.toggle("active");
}
items.forEach(item => item.addEventListener("click", toggleAccordion));

// test render component
export const Test = (doc) => {
  const test = document.querySelector('.test');
  test.setAttribute("data-id", doc.id)
  test.innerText = doc;
};

export const Navbar = () => {

let nav = document.querySelector(".greetings");
nav.innerHTML = `
<h1> Test 3! </h1>
`;

/* can play with the offset value to get the smooth results you are looking for.
const stickyEl = document.querySelector(".me_sticky stick");
const stickyPosition = stickyEl.getBoundingClientRect().top;
const offset = -20;
window.addEventListener("scroll", function() {
  if (window.pageYOffset >= stickyPosition + offset) {
    stickyEl.style.position = "fixed";
    stickyEl.style.top = "0px";
  } else {
    stickyEl.style.position = "static";
    stickyEl.style.top = "";
  }
}); */
};
export const Conditional = () => {
  const likesBtn = document.querySelector(".like-btn");
  const orderBtn = document.querySelector(".order-btn");
  const mealList = document.querySelector(".meal-list");
  const orderList = document.querySelector(".order-list");
  const guide = document.querySelector(".guide");

  // conditional rendering
  orderBtn.addEventListener("click", event => {
    event.preventDefault();
    mealList.style.display = "none";
    orderList.style.display = "block";
    likesBtn.setAttribute("selected", "false");
    orderBtn.setAttribute("selected", "true");
    guide.innerHTML = `Pickup point is at <b>Yaya Centre</b> only!`;
  });
};

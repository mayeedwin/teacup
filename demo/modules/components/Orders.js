const order = document.querySelector(".list");

// create meals component
export const Orders = (doc) => {
  // create elements
  const meal = document.createElement("li");
  const name = document.createElement("span");
  const button = document.createElement("span");

  // set data-id attribute
  meal.setAttribute("data-id", doc.id);
  meal.setAttribute("class", "orders");
  name.setAttribute("class", "name");
  button.setAttribute("class", "rating order");
  
  // set inner text
  name.innerText = `${doc.data().name}`;
  button.innerHTML = `<i class="fas fa-cart-plus"></i> Order Now`;
  
  // on clicking meal, display meal price
  button.addEventListener("click", event => {
    button.innerHTML = `<b>Ordered <i class="far fa-check-circle"></i></b>`;
  });

  // append elements
  meal.appendChild(name);
  meal.appendChild(button);
  order.appendChild(meal);
};

import { Confirm } from "./Confirm.js";
const order = document.querySelector(".order-list");
const summary = document.querySelector(".add-confirm");
// const okay = document.querySelector(".okay");
// const cancel = document.querySelector(".cancel");

// create meals component
export const Orders = doc => {
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
  button.innerHTML = `<i class="fab fa-opencart"></i> Order Now`;

  // on clicking order, show popup to confirm
  button.addEventListener("click", event => {
    let popup = confirm("Once you select Okay, your order will be placed and confirmed!");
     if(popup) {
        summary.innerHTML = Confirm(doc);
        button.innerHTML = `<b>Ordered <i class="far fa-check-circle"></i></b>`;
     } else {
       button.innerHTML = `<b>Cancelled! <i class="fas fa-times"></i></b>`;
     }
  });

  // append elements
  meal.appendChild(name);
  meal.appendChild(button);
  order.appendChild(meal);
};

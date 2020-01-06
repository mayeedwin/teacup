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
    let table = prompt("What's your table number?");
    let count = prompt("How many plates?");
    let popup = confirm("Kindly confirm your order now!");
    
    let price = doc.data().price * count;

    // Add a new document with a generated id.
    const addOrder = () => {
      db.collection("orders")
        .add({
          table: table,
          meal: doc.data().name,
          count: count,
          price: price,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(docRef => {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(error => {
          console.error("Error adding document: ", error);
        });
    };

    if (table) {
      // show order success alert
      summary.style.display = "block";
      summary.innerHTML = Confirm(doc, table, count, price);
      addOrder();
      button.innerHTML = `<b>Ordered <i class="far fa-check-circle"></i></b>`;
      // set timer
      setTimeout(() => {
        // show sucess for 3seconds!
        summary.style.display = "none";
        // show order button
        // mbutton.innerHTML = `<i class="fab fa-opencart"></i> Order Now`;
      }, 5000);
    } else {
      button.innerHTML = `<b>Cancelled <i class="fas fa-times"></i></b>`;
    }
  });

  // append elements
  meal.appendChild(name);
  meal.appendChild(button);
  order.appendChild(meal);
};

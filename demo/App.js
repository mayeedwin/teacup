import { abbreviateRating } from "./modules/Rating.js";
import { getDate } from "./modules/Date.js";
// import { Test } from "./modules/components/Test.js";

const list = document.querySelector(".list");

// rendering components
const Render = (doc) => {
  // Test(doc);
  // add the render components
  // to get a particular value of a document, use "doc.data().value"
  let meal = document.createElement("li");
  let name = document.createElement("span");
  let rating = document.createElement("span");

  // set data-id attribute
  meal.setAttribute("data-id", doc.id);
  meal.setAttribute("class", "meal");
  name.setAttribute("class", "name");
  rating.setAttribute("class", "rating");

  // redefine rating value and abbreviate
  let rateValue = doc.data().rating;
  let newRating = abbreviateRating(rateValue);

  // set inner text
  name.innerHTML = `${doc.data().name}`;
  rating.innerHTML = `<i class="far fa-heart"></i> ${newRating}`;

  // on clicking meal, display meal price
  meal.addEventListener("click", event => {
    rating.innerHTML = `<i class="fas fa-dollar-sign"></i> ${doc.data().price}`;
  });

  // append elements
  meal.appendChild(name);
  meal.appendChild(rating);
  list.appendChild(meal);
};

// get firestore documents
db.collection("meals")
  .orderBy("rating", "desc")
  .get()
  .then(querySnapshot => {
    // loop through each document
    querySnapshot.forEach(doc => {
      // call the "Render" function and pass "doc" as the parameter
      Render(doc);
    });
  })
  .catch(error => {
    // do something with the error
    console.log("Error getting documents: ", error);
  });

// get date
let date = document.querySelector(".date");

// call the date function
setInterval(() => {
  // run every 1 second
  date.innerText = getDate();
}, 1000);

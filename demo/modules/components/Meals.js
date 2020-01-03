import { abbreviateRating } from "../Rating.js";

const list = document.querySelector(".meal-list");

// create meals component
export const Meals = doc => {
  // create elements
  const meal = document.createElement("li");
  const name = document.createElement("span");
  const rating = document.createElement("span");

  // set data-id attribute
  meal.setAttribute("data-id", doc.id);
  meal.setAttribute("class", "meal");
  name.setAttribute("class", "name");
  rating.setAttribute("class", "rating");
  
  // redefine rating value and abbreviate
  let rateValue = doc.data().rating;
  let newRating = abbreviateRating(rateValue);

  // set inner text or html
  name.innerText = `${doc.data().name}`;
  rating.innerHTML = `<i class="far fa-heart"></i> ${newRating}`;

  // on clicking meal, display meal price
  meal.addEventListener("click", event => {
    rating.innerHTML = `<b>ksh</b> ${doc.data().price}`;
  });

  // append elements
  meal.appendChild(name);
  meal.appendChild(rating);
  list.appendChild(meal);
};

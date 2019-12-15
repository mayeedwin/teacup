import { Meals } from "./modules/components/Meals.js";
// import { getDate } from "./modules/Date.js";
// import { Test } from "./modules/components/Test.js";

const list = document.querySelector(".list");

// rendering components
const Render = doc => {
  // add the render components
  // to get a particular value of a document, use "doc.data().value"
  // Test(doc);
  Meals(doc);
};

// get firestore documents
db.collection("meals")
  .orderBy("rating", "desc")
  .get()
  .then(querySnapshot => {
    // loop through each document
    querySnapshot.forEach(doc => {
      // call the "Render" function and pass "doc" as the argument
      Render(doc);
    });
  })
  .catch(error => {
    // do something with the error
    console.log("Error getting documents: ", error);
  });

/* get date
let date = document.querySelector(".date");

// call the date function
setInterval(() => {
  // run every 1 second
  date.innerText = getDate();
}, 1000); */

const list = document.querySelector('.list');

// rendering components
const Render = (doc) => {
  // add the render components
  // to get a particular value of a document, use "doc.data().value"
  let meal = document.createElement('li');
  let name = document.createElement('span');
  let rating = document.createElement('span');
  
  // set data-id attribute
  meal.setAttribute("data-id", doc.id);
  
  // set inner text
  name.innerText = doc.data().name;
  rating.innerText = doc.data().rating;
  
  // append elements
  meal.appendChild(name);
  meal.appendChild(rating);
  list.appendChild(meal);

};

// get firestore documents
db.collection("meals")
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
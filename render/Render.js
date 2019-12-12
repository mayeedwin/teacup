// rendering components
const Render = doc => {
  // add the render components or could import a render component
  // to get a particular value of a document, use "doc.data().value"
};

// get firestore documents
db.collection("collection")
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

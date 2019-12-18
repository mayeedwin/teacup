// rendering components
const Render = doc => {
  /* add the render components or could import a render functional 
  component and pass "doc as the argument" */
  /* to get a particular value of a document, use "doc.data().value"
  remember to set a "data-id" to "doc.id" attribute on the render component for each document
  */
};

// get all firestore documents
db.collection("collection")
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

// rendering components
const Render = (doc) => {
   // add the render components
   // to get a particular value of a document, use "doc.data(value)"  
}

// get firestore documents 
db.collection("collection").where("condition", "==", true)
    .get()
    .then((querySnapshot) => {

        // loop through each document
        querySnapshot.forEach((doc) => {

           // call the "Render" function and pass "doc" as the parameter
           Render(doc)
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });


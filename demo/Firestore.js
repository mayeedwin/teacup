// Your web app's Firebase configuration
let firebaseConfig = {
 // apiKey: "**************",
  authDomain: "teacupapp.firebaseapp.com",
  databaseURL: "https://teacupapp.firebaseio.com",
  projectId: "teacupapp"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

firebase
  .firestore()
  .enablePersistence()
  .catch((err) => {
    if (err.code == "failed-precondition") {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      // ...
    } else if (err.code == "unimplemented") {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
    }
  });
// Subsequent queries will use persistence, if it was enabled successfully

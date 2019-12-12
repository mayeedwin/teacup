// Your web app's Firebase configuration
  let firebaseConfig = {
    apiKey: "xxxxxxxx",
    authDomain: "teacupapp.firebaseapp.com",
    databaseURL: "https://teacupapp.firebaseio.com",
    projectId: "teacupapp",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

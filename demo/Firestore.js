// Your web app's Firebase configuration
  let firebaseConfig = {
    apiKey: "AIzaSyC3KwdCfs8VQymR-bEucUUB-3jdKvxddzE",
    authDomain: "teacupapp.firebaseapp.com",
    databaseURL: "https://teacupapp.firebaseio.com",
    projectId: "teacupapp",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
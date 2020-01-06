// get a user profile
firebase.auth().onAuthStateChanged(user => {
  if (user != null) {
    name = user.displayName;

    // default component
    return `
           <div> 
               <img style="width: 50px; height: 50px; border-radius: 50%" src=${user.photoURL} alt=${name}/>
               <div>${user.displayName}</div>
               <div>${user.email}</div>
             </div>
       `;
  } else {
    // No user is signed in, redirect to auth page
    window.location.href = "";
  }
});

// logout user
document.getElementById("logout").addEventListener("click", () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      console.log(`logged out...`);
      // No user is signed in, redirect to auth
      window.location.href = "../";
    })
    .catch(error => {
      // An error happened.
    });
});

# (◠‿◕) Teacupjs, a firebase cloud firestore framework

A `micro-framework` for building firebase `cloud firestore` data powered components
including other firebase integrations such `firebase cloud messaging, authentication, functions, storage e.t.c`.

## View demo app ◉‿◉

In the `./demo` directory, preview the demo app. The **Frontend** is being built using
**mobile-first** approach; therefore the desktop roll-up is gonna be progressive!

You'll need to create a `Firestore.js` in the root folder and copy firebase
config to it from the firebase console. Remember to initialize cloud firestore in this file after creating it
as shown below.

Find the complete [firestore setup guide here](https://firebase.google.com/docs/firestore/quickstart)

```javascript
// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "### FIREBASE API KEY ###",
  authDomain: "### FIREBASE AUTH DOMAIN ###",
  projectId: "### CLOUD FIRESTORE PROJECT ID ###"
});

const db = firebase.firestore();
```

## Style guide ◉‿◉

- es6 syntax

- vanilla JS

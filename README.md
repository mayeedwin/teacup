## Teacupjs, a Firebase Cloud Firestore framework

### Author : [Maye Edwin](https://twitter.com/mayeedwin1)

***"This is work in progress but you could play with it anytime"***

A **Micro-framework** for building Firebase `Cloud Firestore` data powered components
including other Firebase integrations such `firebase cloud messaging, authentication, functions, storage e.t.c`.

## View demo app ◉‿◉

In the `./demo` directory, preview the demo app. The **Frontend** is being built using
**mobile-first** approach; therefore the Desktop roll-up is gonna be Progressive!

**So, using your favourite browser's dev tools, view the mobile version : )**
    
     Alert : Person, the desktop roll-up first preview is out!

### Setting up

You'll need to create a `Firestore.js` in the root folder and copy firebase
config to it from the firebase console. Remember to initialize cloud firestore in this file after creating it
as shown below.

```javascript

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "### FIREBASE API KEY ###",
  authDomain: "### FIREBASE AUTH DOMAIN ###",
  projectId: "### CLOUD FIRESTORE PROJECT ID ###"
});

const db = firebase.firestore();

```

Find the complete [firestore setup guide here](https://firebase.google.com/docs/firestore/quickstart)

#### Firestore demo data

Here, you'll need to manually add demo data in Cloud Firestore for your Project in the 
Firebase console; In a **meals** collection with each document having an automatic ID generated and fields should be as shown below!

```bash
   
   name : string
   price : number
   rating : number

```

## Style guide ◉‿◉

- Component based syntax with es6 modules!

- Use es6 syntax all through!

- Vanilla JS, best of Loves!

- Names of all Components files should start with a Uppercase letter

- Functional Components recommended ( but Class components are okay too)

- Use Function/Class expression syntax when defining a Function/Class

- Single name Function name recommended. Should start with a lowercase letter.

- All variables name should be lowercase or if in any case, double named, then; **typeSecond** format to be used

- Remember to end all expressions with a semi-colon

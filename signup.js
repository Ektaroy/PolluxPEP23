const firebaseApp = firebase.initializeApp({ 
	apiKey: "AIzaSyA8Tu__5fz62JoSPV9PYL_aplcmCUNjC_8",
  authDomain: "login-c205e.firebaseapp.com",
  databaseURL: "https://login-c205e-default-rtdb.firebaseio.com",
  projectId: "login-c205e",
  storageBucket: "login-c205e.appspot.com",
  messagingSenderId: "563943740647",
  appId: "1:563943740647:web:2cda347ea7f5c0be47be42"
 });
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed In")
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}
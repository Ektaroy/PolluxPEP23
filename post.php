<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB9GcDQn6Tl2MI-ZvshJN9jHLJ0K6P4UCw",
    authDomain: "chatroom-134ad.firebaseapp.com",
    projectId: "chatroom-134ad",
    storageBucket: "chatroom-134ad.appspot.com",
    messagingSenderId: "214542608003",
    appId: "1:214542608003:web:621bb4427b922ca4f59db6",
    measurementId: "G-TX0WBRW2C9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
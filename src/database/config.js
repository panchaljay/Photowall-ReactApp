import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyBTKCbHvbI1ErC25UeRa9EkK12nsVZmjA8",
    authDomain: "photowall-e106b.firebaseapp.com",
    databaseURL: "https://photowall-e106b-default-rtdb.firebaseio.com",
    projectId: "photowall-e106b",
    storageBucket: "photowall-e106b.appspot.com",
    messagingSenderId: "480224168156",
    appId: "1:480224168156:web:f19e9c09f4416d6aaf8c19",
    measurementId: "G-4LRDYPHJ1E"
  };
  
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database()
  
  export {database}
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBiKIzFaEQfUNdY3_yHHSmN4g46AfdZGvk",
    authDomain: "project-management-react-5bc2b.firebaseapp.com",
    databaseURL: "https://project-management-react-5bc2b.firebaseio.com",
    projectId: "project-management-react-5bc2b",
    storageBucket: "project-management-react-5bc2b.appspot.com",
    messagingSenderId: "499512953760",
    appId: "1:499512953760:web:9332ba725d426c9fdc32c5"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true})


  export default firebase;
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyBhOJVjnSy8h6KzZQTMiW6XGIa3p7sWN30",
    authDomain: "cursoapp-c542b.firebaseapp.com",
    projectId: "cursoapp-c542b",
    storageBucket: "cursoapp-c542b.appspot.com",
    messagingSenderId: "1082621938198",
    appId: "1:1082621938198:web:cd575c87d04434045e0337",
    measurementId: "G-RD6Y82XWY0"
  };
  
  if(!firebase.apps.length)
  {
   firebase.initializeApp(firebaseConfig);
  }
  export default firebase;

 
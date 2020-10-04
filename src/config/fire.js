import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCB7yN_hqQYiz74Pek83m53R89QlXXnZqM",
  authDomain: "project-b4a22.firebaseapp.com",
  databaseURL: "https://project-b4a22.firebaseio.com",
  projectId: "project-b4a22",
  storageBucket: "project-b4a22.appspot.com",
  messagingSenderId: "776845152472",
  appId: "1:776845152472:web:a654e33f65e6aa7224c7ad"
};

 export const fire = firebase.initializeApp(firebaseConfig);
 export var db = fire.firestore();
  

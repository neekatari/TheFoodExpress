import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAfc79XKUc8bP-JF4dq0C49pExpcXoixsI",
    authDomain: "canteen-9e632.firebaseapp.com",
    databaseURL: "https://canteen-9e632.firebaseio.com",
    projectId: "canteen-9e632",
    storageBucket: "gs://canteen-9e632.appspot.com",
    messagingSenderId: "489655871007",
    appId: "1:489655871007:web:41f06684f846d8ff"
  };

  export const fire = firebase.initializeApp(config);
  export default fire; 
  export const database_tblPackages = firebase.database().ref('/tblPackages')
  export const database_tblOwner = firebase.database().ref('/tblOwner')
  export const database_tblShop = firebase.database().ref('/tblShop')
  export const database_tblCategory = firebase.database().ref('/tblCategory')
  export const database_tblSubCategory = firebase.database().ref('/tblSubCategory')
  export const database_tblItem = firebase.database().ref('/tblItem')
  
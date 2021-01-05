// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyClHMrDQQB0qjE3Pnvd0nR8AhJ-MTfGYRY",
    authDomain: "whatsappclone-910c3.firebaseapp.com",
    projectId: "whatsappclone-910c3",
    storageBucket: "whatsappclone-910c3.appspot.com",
    messagingSenderId: "236402160108",
    appId: "1:236402160108:web:d47be1fd9036de160510c9",
    measurementId: "G-MCDXT7PYMK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
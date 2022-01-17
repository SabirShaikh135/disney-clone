// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDUtA21maYn8B6jTYrhofuIFtBVELDqj5A",
  authDomain: "disney-clone-7de2f.firebaseapp.com",
  projectId: "disney-clone-7de2f",
  storageBucket: "disney-clone-7de2f.appspot.com",
  messagingSenderId: "77688965134",
  appId: "1:77688965134:web:87d638167798854dbfd45f",
  measurementId: "G-DK4K7FXDG2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db =firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth ,provider,storage}
export default db;

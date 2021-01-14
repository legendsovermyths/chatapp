import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCehpkQYcf4--czpPVQMM2NoI_MvjZhaks",
  authDomain: "chatapp-mern-f82c4.firebaseapp.com",
  databaseURL: "https://chatapp-mern-f82c4.firebaseio.com",
  projectId: "chatapp-mern-f82c4",
  storageBucket: "chatapp-mern-f82c4.appspot.com",
  messagingSenderId: "438449042154",
  appId: "1:438449042154:web:deda3d9b951bb8a3611d93",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;

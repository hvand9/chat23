import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBUvBLdNWCipo3L41xaMgGvTNckX_Bc-qA",
  authDomain: "chat-62887.firebaseapp.com",
  projectId: "chat-62887",
  storageBucket: "chat-62887.appspot.com",
  messagingSenderId: "33924645596",
  appId: "1:33924645596:web:348745083a1976135c2a19",
  measurementId: "G-K7XC4XLYJE" 
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyBNVbwlhluvUSCfkO2iRUwzQRarty2vswQ",
    authDomain: "chat-rum-331af.firebaseapp.com",
    projectId: "chat-rum-331af",
    storageBucket: "chat-rum-331af.appspot.com",
    messagingSenderId: "245050215326",
    appId: "1:245050215326:web:9ef94c1c7889d2bd09248f",
    measurementId: "G-T4ZFZMH22Y"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
const db= firebase.firestore();
const auth= firebase.auth();

auth.useEmulator('http://localhost:9099', { disableWarnings: true });
if(window.location.hostname === 'localhost'){
  db.useEmulator('localhost', '8080');
}

export { auth, db};
export default firebase;
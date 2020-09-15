import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCxtz2WhfG0MrSUquB-yOmc0dGL4HphVBw',
  authDomain: 'react-slack-clone-62d41.firebaseapp.com',
  databaseURL: 'https://react-slack-clone-62d41.firebaseio.com',
  projectId: 'react-slack-clone-62d41',
  storageBucket: 'react-slack-clone-62d41.appspot.com',
  messagingSenderId: '137093391528',
  appId: '1:137093391528:web:03b2a54082e8c48ccdce9d',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const signInWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(googleProvider);
};

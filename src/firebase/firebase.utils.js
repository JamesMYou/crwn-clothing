import firebase from 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/auth';

 const config = {
    apiKey: "AIzaSyAZm3YlY3G1eaE0lr_C9F4bM3EMzB75IDQ",
    authDomain: "crwn-db-cf7e3.firebaseapp.com",
    databaseURL: "https://crwn-db-cf7e3.firebaseio.com",
    projectId: "crwn-db-cf7e3",
    storageBucket: "crwn-db-cf7e3.appspot.com",
    messagingSenderId: "918890705241",
    appId: "1:918890705241:web:71f57db87f2c6cb2b95c48",
    measurementId: "G-759BFS73TW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () =>
auth.signInWithPopup(provider)
.catch(()=>{})

export default firebase;
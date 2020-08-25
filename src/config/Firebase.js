import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAyYNJHG_PmxBRkrD9IFW0LadfkkjAPnWY",
    authDomain: "diskoz-662a5.firebaseapp.com",
    databaseURL: "https://diskoz-662a5.firebaseio.com",
    projectId: "diskoz-662a5",
    storageBucket: "diskoz-662a5.appspot.com",
    messagingSenderId: "549722557761",
    appId: "1:549722557761:web:69b440486d55bd199fa5c0"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
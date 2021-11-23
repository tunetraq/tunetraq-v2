import { getAuth } from '@firebase/auth';
import { initializeApp } from 'firebase/app';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBb9R1N32KJqaWapyWGQrVSUIhuSQa45_8",
    authDomain: "tunetraq-v2.firebaseapp.com",
    projectId: "tunetraq-v2",
    storageBucket: "tunetraq-v2.appspot.com",
    messagingSenderId: "340783420379",
    appId: "1:340783420379:web:bed6df12ef54ca09760dfe",
    measurementId: "G-C2MZVD7QFQ"
  };


  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
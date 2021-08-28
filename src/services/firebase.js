import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB84uM5A5NUd2dwb40t-H1kjn3DwWRdKDY",
    authDomain: "my1portfolioproject.firebaseapp.com",
    projectId: "my1portfolioproject",
    storageBucket: "my1portfolioproject.appspot.com",
    messagingSenderId: "649101948345",
    appId: "1:649101948345:web:1f156d1a61893765ed3268",
    measurementId: "G-2J2FTX98B0"
  };

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
export const auth = firebase.auth();
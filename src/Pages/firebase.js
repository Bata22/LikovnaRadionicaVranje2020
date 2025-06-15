 import firebase from "firebase";

 const firebaseConfig ={
    
    apiKey: "AIzaSyAMG6z6Wr_JGlOeFm4kjmfbEuBgm2Qt4Tw",
    authDomain: "likovna-radionica.firebaseapp.com",
    databaseURL: "https://likovna-radionica.firebaseio.com",
    projectId: "likovna-radionica",
    storageBucket: "likovna-radionica.appspot.com",
    messagingSenderId: "442251224893",
    appId: "1:442251224893:web:746255f45434093d4a4754",
    measurementId: "G-QM4MS347T8"
};
const firebaseapp = firebase.initializeApp(firebaseConfig);


const db = firebaseapp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db,auth,storage};
 

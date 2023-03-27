import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
    apiKey: "AIzaSyByvxAkmGpeOaQirlzPPHCI69UQ-iGviao",
    authDomain: "projeto-67-fa2cb.firebaseapp.com",
    databaseURL: "https://projeto-67-fa2cb-default-rtdb.firebaseio.com",
    projectId: "projeto-67-fa2cb",
    storageBucket: "projeto-67-fa2cb.appspot.com",
    messagingSenderId: "96823118793",
    appId: "1:96823118793:web:f37a4de9b1149a7cf73618"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
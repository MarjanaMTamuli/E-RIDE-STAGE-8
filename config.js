import firebase from "firebase";
require("@firebase/firestore");

  const firebaseConfig = {
    apiKey: "AIzaSyAAnPMZJ_NpX-3jyK_xHfce4G7Gz5ZUMoA",
    authDomain: "e-ride-9910b.firebaseapp.com",
    projectId: "e-ride-9910b",
    storageBucket: "e-ride-9910b.appspot.com",
    messagingSenderId: "192645785232",
    appId: "1:192645785232:web:87b364a47181ebc98d1a15"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


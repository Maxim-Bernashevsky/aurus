import firebase from "firebase"

const config = {
  apiKey: "AIzaSyCO0Zx7EV6-TWNpAl3ClLysfDPXHV_M3Hw",
  authDomain: "aurus-b4caf.firebaseapp.com",
  databaseURL: "https://aurus-b4caf.firebaseio.com",
  projectId: "aurus-b4caf",
  storageBucket: "aurus-b4caf.appspot.com",
  messagingSenderId: "413127370991"
};

export default firebase.initializeApp(config).database().ref();
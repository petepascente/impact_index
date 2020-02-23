

var firebaseConfig = {
  apiKey: "AIzaSyBXLDW5CIx271ZOa-x1HnhqPWPHZCyCTHU",
  authDomain: "impact-index-2020.firebaseapp.com",
  databaseURL: "https://impact-index-2020.firebaseio.com",
  projectId: "impact-index-2020",
  storageBucket: "impact-index-2020.appspot.com",
  messagingSenderId: "969923046117",
  appId: "1:969923046117:web:3bab1da20a6420e638420c",
  measurementId: "G-QYEEVPM3HB"
};

firebase.initializeApp(firebaseConfig);


var db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });

function getDocuments() {

}
var collectionRef = db.collection("materials");

collectionRef.get().then(function(collection) {
    if (collection.exists) {
        console.log("Colections", collection.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});

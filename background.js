
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
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


let materialsList = makeList();

function gogoApp() {
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.start) {
        sendResponse({data: materialsList});
    };
  })
}

function makeList() {
  var db = firebase.firestore();
  var collectionRef = db.collection("materials");
  let materialList = [];

    db.collection("materials").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        let dataThing = doc.data();
        let dataName = doc.id;
        let item = {"name": dataName,
                    "data": dataThing};
        materialList.push(item);
    });
  })
  return materialList;
}

window.onload = function() {
  gogoApp();
};

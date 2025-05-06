const firebaseConfig = {
  apiKey: "AIzaSyDtRjQAja3NA3oA6qyXDt9K10iEvS9r9SA",
  authDomain: "dht22-8b687.firebaseapp.com",
  databaseURL: "https://dht22-8b687-default-rtdb.firebaseio.com",
  projectId: "dht22-8b687",
  storageBucket: "dht22-8b687.firebasestorage.app",
  messagingSenderId: "987387044506",
  appId: "1:987387044506:web:49e48845644ab77f9cf523"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const tempRef = db.ref("sensor/temperature");
const humRef = db.ref("sensor/humidity");

tempRef.on("value", snapshot => {
  document.getElementById("temperature").innerText = `${snapshot.val()} °C`;
});

humRef.on("value", snapshot => {
  document.getElementById("humidity").innerText = `${snapshot.val()} %`;
});

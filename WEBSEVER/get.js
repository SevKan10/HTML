import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

// Your Firebase configuration
const firebaseConfig = {
    apiKey : "AIzaSyDNVI6MfggzOLtCoP1uVAvajd9lKtS22LU" , 
    authDomain : "ifarme-df868.firebaseapp.com" , 
    databaseURL : "https://ifarme-df868-default-rtdb.asia-southeast1.firebaseddatabase.app" , 
    projectId : "ifarme-df868" , 
    storageBucket : "ifarme-df868.appspot.com" , 
    messagingSenderId : "124564135650" , 
    appId : "1:124564135650:web:177ab67903dba42afb48bb" , 
    measurementId : "G-WDC35ZBLB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Reference to the "test" node
const testRef = ref(database, "test");
onValue(testRef, (snapshot) => {
  const data = snapshot.val();
  const testValueElement = document.getElementById("testValue");
  testValueElement.innerText = "Test Value: " + data.value;
});

// Reference to the "test1" node
const test1Ref = ref(database, "test1");
onValue(test1Ref, (snapshot) => {
  const data = snapshot.val();
  const test1ValueElement = document.getElementById("test1Value");
  test1ValueElement.innerText = "Test1 Value: " + data.value1;
});

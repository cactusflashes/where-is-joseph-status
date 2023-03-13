import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
//import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";

console.log("hello, world!");

//API key & database ref
const firebaseConfig = {

    apiKey: "AIzaSyAqXbrfut6o2Fqf5oPYczouIXEmJnx2f_M",
    authDomain: "where-is-joseph.firebaseapp.com",
    databaseURL: "https://where-is-joseph-default-rtdb.firebaseio.com",
    projectId: "where-is-joseph",
    storageBucket: "where-is-joseph.appspot.com",
    messagingSenderId: "114864610218",
    appId: "1:114864610218:web:bd0419a350fda8409069d3",
    measurementId: "G-J6ZW0G0ENH"
  };
  
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
//const auth = getAuth(app);
//const email 
//const password

//signInWithEmailAndPassword(auth, email, password)
    //.then((userCredential) => {

const dropdown = document.getElementById('dropdown-status');

dropdown.addEventListener('change', () => {
  console.log('Dropdown Value Changed.');

    const selectedOption = dropdown.value.replace("-", '');
  console.log('Selected option:', selectedOption);

    //store option in database
    set(ref(database,'selectedOption'), selectedOption)
    .then(() => {
      console.log('Option successfully saved to database.');
    })
    .catch((error) => {
      console.log('Error saving option to database:', error);
    });

});
    
//}); 

// Navbar
document.addEventListener("DOMContentLoaded", function() {
    var nav1 = document.getElementById("Features").textConent;
    var nav2 = document.getElementById("company").textContent;

    console.log(Features);
    console.log(company);
});


const firebaseConfig = {
    apiKey: "AIzaSyCBxzRw_9EROmJrvsMbZ2UuUsg9dxor0iI",
    authDomain: "snap-task4.firebaseapp.com",
    projectId: "snap-task4",
    storageBucket: "snap-task4.appspot.com",
    messagingSenderId: "318304798390",
    appId: "1:318304798390:web:fb41a097c9504d06ac0817",
    measurementId: "G-K65YB7SLWP"
  };

  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js";

const email = document.querySelector("#email")
const password = document.querySelector("#password")

const firebaseConfig = {
    apiKey: "AIzaSyDsd-lXFiMCsBKxn6Ykt7U4q7th3ARW7Yg",
    authDomain: "login-firebase-34eff.firebaseapp.com",
    projectId: "login-firebase-34eff",
    storageBucket: "login-firebase-34eff.appspot.com",
    messagingSenderId: "800979400339",
    appId: "1:800979400339:web:f243baae3c92f61f117f66",
    measurementId: "G-41VSFN5VGK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
// console.log(auth)
const button = document.querySelector(".submitButton")
button.addEventListener('click', (e) => {
    e.preventDefault()

    // console.log(email.value, password.value)


    signInWithEmailAndPassword(auth, email.value, password.value).then((userCredential) => {
        //signed in
        const user = userCredential.user;
        const userEmail = userCredential.email;
        const userPassword = userCredential.password;

        jQuery(function ($) {
            $(".submitButton").click(function () {
                $(".modal").removeClass('hide')
            })
        })

    })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        })
})





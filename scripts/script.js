import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithRedirect, FacebookAuthProvider, GithubAuthProvider } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js";

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

// login with google
const googleButton = document.querySelector(".google");
googleButton.addEventListener('click', () => {
    const provider = new GoogleAuthProvider();
    auth.languageCode = 'it';
    provider.setCustomParameters({
        'login_hint': 'user@example.com'
    });

    if (window.innerWidth > 768) {
        signInWithPopup(auth, provider)
            .then((result) => {

                jQuery(function ($) {
                    $(".modal").removeClass('hide')
                })

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    } else {
        signInWithRedirect(auth, provider);
        getRedirectResult(auth)
            .then((result) => {

                jQuery(function ($) {
                    $(".modal").removeClass('hide')
                })

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            })
    }

})


// login with facebook
auth.languageCode = 'it';
const facebookButton = document.querySelector('.facebook');
facebookButton.addEventListener('click', () => {
    const provider = new FacebookAuthProvider();

    if (window.innerWidth > 768) {
        signInWithPopup(auth, provider)
            .then((result) => {

                jQuery(function ($) {
                    $(".modal").removeClass('hide')
                })

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = FacebookAuthProvider.credentialFromError(error);
            });

    } else {
        signInWithRedirect(auth, provider);
        getRedirectResult(auth).then((result) => {

            jQuery(function ($) {
                $(".modal").removeClass('hide')
            });

        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = FacebookAuthProvider.credentialFromError(error);
        })

    };
})


// login with github
const githubButton = document.querySelector('.github');
githubButton.addEventListener('click', () => {
    const provider = new GithubAuthProvider();
    if (window.innerWidth > 768) {
        signInWithPopup(auth, provider)
            .then((result) => {

                jQuery(function ($) {
                    $(".modal").removeClass('hide')
                });

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GithubAuthProvider.credentialFromError(error);
            });

    } else {
        signInWithRedirect(auth, provider);
        getRedirectResult(auth)
            .then((result) => {
                const credential = GithubAuthProvider.credentialFromResult(result);

                jQuery(function ($) {
                    $(".modal").removeClass('hide')
                });

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GithubAuthProvider.credentialFromError(error);
            })
    }


})


// with email and password
const button = document.querySelector(".submitButton")
button.addEventListener('click', (e) => {
    e.preventDefault()
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





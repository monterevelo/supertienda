import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Configure Firebase.
const config = {
    apiKey: "AIzaSyDV6Lumq9QW01K-d-Oc8be5UzN-fDaAxwg",
    authDomain: "supertienda-d8494.firebaseapp.com",
    projectId: "supertienda-d8494",
    storageBucket: "supertienda-d8494.appspot.com",
    messagingSenderId: "322395202603",
    appId: "1:322395202603:web:6bc1a9e889ca7c2239f66e"
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/home',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: (authResult) => {
            const objeto = {
                name: authResult.user.displayName,
                email: authResult.user.email,
                img: authResult.user.photoURL,
                id: authResult.user.uid,
                isNew: authResult.additionalUserInfo.isNewUser,
            }
            localStorage.setItem('session', JSON.stringify(objeto));
            return true;
        },
    },
};

function SignInButton() {
    return (
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    );
}

export default SignInButton
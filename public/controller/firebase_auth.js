import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js';

import * as Elements from '../viewpage/elements.js'
import * as Util from '../viewpage/util.js'
import * as Constants from '../model/constants.js'

const auth = getAuth();

export function addEventListeners() {

    Elements.formSignIn.addEventListener('submit', async e => {
        e.preventDefault();   //Keeps from refreshing the current page
        const email = e.target.email.value;
        const password = e.target.password.value;
        try {

            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            Elements.modalSignin.hide();

        } catch (error) {

            const errorCode = error.code;
            const errorMessage = error.message;
            Util.info('Sign In Error', JSON.stringify(error), Elements.modalSignin);
            if (Constants.DEV)
                console.log(`Sign In Error: ${errorCode} | ${errorMessage}`);
        }

    });

    Elements.menuSignOut.addEventListener('click', async () => {
        //sign out from firebase auth
        try {
            await signOut(auth);
        } catch (e) {
            Util.info('Sign Out Error', JSON.stringify(e));
            if (Constants.DEV)
                console.log('sign out error' + e);
        }
    });

    onAuthStateChanged(auth, authStateChangeObserver);

}

function authStateChangeObserver(user) {
    if (user) {
        //Signed In
        console.log(`auth state changed: ${user.email}`);
    } else {
        //Signed Out
        console.log(`auth state changed: Signed Out`);
    }
}
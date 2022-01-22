import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js';

import * as Elements from '../viewpage/elements.js'

const auth = getAuth();

export function addEventListeners() {

    Elements.formSignIn.addEventListener('submit', async e => {
        e.preventDefault();   //Keeps from refreshing the current page
        const email = e.target.email.value;
        const password = e.target.password.value;
        try {

            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            const user = userCredential.user;
            console.log(`Sign In Success: ${JSON.stringify(user)}`);

        } catch (error) {

            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(`Sign In Error: ${errorCode} | ${errorMessage}`);
        }
        
    });

}


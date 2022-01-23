import {getFirestore, collection, addDoc} from "https://www.gstatic.com/firebasejs/9.6.4/firebase-firestore.js"
import { COLLECTIONS } from "../model/constants.js";

const db = getFirestore();

export async function addThread(thread){
    const docRef = await addDoc(collection(db, COLLECTIONS.THREADS), thread.toFirestore());
    return docRef.id;

}
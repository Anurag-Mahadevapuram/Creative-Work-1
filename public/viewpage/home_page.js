import * as Elements from './elements.js'
import { routePath } from '../controller/route.js';
import { currentUser } from '../controller/firebase_auth.js';
import * as ProtectedMessage from './protected_message.js'
import { Thread } from '../model/thread.js';
import * as Constants from '../model/constants.js'
import * as FirestoreController from "../controller/firestore_controller.js"

export function addEventListeners(){

    Elements.menuHome.addEventListener('click', ()=>{
        history.pushState(null, null, routePath.HOME);
        home_page();
    });

    Elements.formCreateThread.addEventListener('submit', addNewThread);
}

async function addNewThread(e){
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    const keywords = e.target.keywords.value;
    const uid = currentUser.uid;
    const email = currentUser.email;
    const timestamp = Date.now();
    const keywordsArray  = keywords.toLowerCase().match(/\S+/g);

    const thread = new Thread({
        title, uid, content, email, timestamp, keywordsArray
    });

    try{

        const docId = await FirestoreController.addThread(thread);
        thread.docId = docId;
    }catch(e){
        if(Constants.DEV) console.log(e);
    }

}

export function home_page(){
    if(!currentUser){
        Elements.root.innerHTML = ProtectedMessage.html;
        return;
    }
    //read all threads from DB and render
    buildHomeScreen();
}

function buildHomeScreen(){
    let html = '';
    html+=`
        <button class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#modal-create-thread">
        + New Thread</button>
    `
    Elements.root.innerHTML = html;
}
import * as Elements from './elements.js'
import { routePath } from '../controller/route.js';
import { currentUser } from '../controller/firebase_auth.js';
import * as ProtectedMessage from './protected_message.js'

export function addEventListeners(){

    Elements.menuHome.addEventListener('click', ()=>{
        history.pushState(null, null, routePath.HOME);
        home_page();
    });
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
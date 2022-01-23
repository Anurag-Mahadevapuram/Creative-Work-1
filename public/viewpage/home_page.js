import * as Elements from './elements.js'
import { routePath } from '../controller/route.js';

export function addEventListeners(){

    Elements.menuHome.addEventListener('click', ()=>{
        history.pushState(null, null, routePath.HOME);
        home_page();
    });
}

export function home_page(){
    Elements.root.innerHTML = `
        <h1>Home Page</h1>
    `;
}
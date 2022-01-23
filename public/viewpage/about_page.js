import * as Elements from './elements.js'
import { routePath } from '../controller/route.js';

export function addEventListeners(){
    Elements.menuAbout.addEventListener('click', ()=>{
        history.pushState(null, null, routePath.ABOUT);
        about_page();
    });
}

export function about_page(){
    Elements.root.innerHTML = `
    <h1>About Page</h1>
    `;
}
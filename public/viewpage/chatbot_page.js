import * as Elements from './elements.js'
import { routePath } from '../controller/route.js';
import { currentUser } from '../controller/firebase_auth.js';
import * as ProtectedMessage from './protected_message.js'




export function addEventListeners() {
    Elements.menuChatbot.addEventListener('click', () => {
        history.pushState(null, null, routePath.CHATBOT);
        chatbot_page();
    });

    
}





export function chatbot_page() {
    if (!currentUser) {
        Elements.root.innerHTML = ProtectedMessage.html;
        return;
    }



    Elements.root.innerHTML = `

    <body>
    <header>Chat with Bot</header>
    <section class="main">
    <div class="user-area">
        <img src="images/user.png">
    </div>
    <div class="chatarea-main">
        <div class="chatarea-outer">
            <!-- <div class="chatarea-inner user">Hello hi, how area you, i am good. What about you!</div>
            <div class="chatarea-inner chatbot">Hello hi, how area you, i am good. What about you!</div>
            <div class="chatarea-inner user">Hello hi, how area you, i am good. What about you!</div> -->
        </div>
    </div>    
    <div class="chatbot-area">
        <img src="images/chatbot.png">
    </div>
    <button id="mic"><i class="flaticon-microphone"></i></button>
    
</section>

</body>
    
    `;

    


}




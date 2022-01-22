import * as FirebaseAuth from './controller/firebase_auth.js';

import * as Home from './viewpage/home_page.js'

import * as About from './viewpage/about_page.js'

FirebaseAuth.addEventListeners();
Home.addEventListeners();
About.addEventListeners();
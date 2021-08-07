import { homePage } from './pages/homePage.js';
import { loginPage } from './pages/loginPage.js';
import { registerPage } from './pages/registerPage.js';
import { allMemesPage } from './pages/allMemesPage.js';
import { detailsPage } from './pages/detailsPage.js';
import { createPage } from './pages/createMeme.js';
import { editPage } from './pages/editPage.js';
import { profilePage } from './pages/profilePage.js';
import authService from './services/authService.js';
import page from './node_modules/page/page.mjs';
import {render} from './node_modules/lit-html/lit-html.js';
import { notify } from './notifications/notifications.js';

const mainElement = document.getElementById('mainContent');


page('index.html', '/home');
page('/', '/home');

page('/home',renderMiddle, homePage);
page('/login',renderMiddle, loginPage);
page('/register',renderMiddle, registerPage);
page('/memes', renderMiddle,allMemesPage);
page('/details/:id',renderMiddle, detailsPage);
page('/create',renderMiddle, createPage);
page('/edit/:id',renderMiddle, editPage);
page('/profile',renderMiddle, profilePage);


setUserNav();
page.start();

document.getElementById('logoutBtn').addEventListener('click', async () => {
    await authService.logout();
    setUserNav();
    page.redirect('/home');
});


 function renderMiddle(ctx, next) {
    ctx.render = (content) => render(content, mainElement);
    ctx.setUserNav = setUserNav;
    next();
}

function setUserNav() {
    const email = localStorage.getItem('email');

    if (email != null) {
        document.querySelector('div.profile > span').textContent = `Welcome, ${email}`
        document.querySelector('.user').style.display = '';
        document.querySelector('.guest').style.display = 'none';
    } else {
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = '';
    }
}
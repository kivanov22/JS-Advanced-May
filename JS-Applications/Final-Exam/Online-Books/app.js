import { dashboardPage } from "./pages/dashboardPage.js";
import { loginPage } from "./pages/loginPage.js";
import { registerPage } from "./pages/registerPage.js";
import authService from "./services/authService.js";
import { render } from './node_modules/lit-html/lit-html.js';
import page from "./node_modules/page/page.mjs";
import { detailsPage } from "./pages/detailsPage.js";
import { createPage } from "./pages/createPage.js";
import { editPage } from "./pages/editPage.js";
import { profilePage } from "./pages/profilePage.js";


const contentView = document.getElementById('site-content');
page('index.html', '/home');
page('/', '/home');

page('/home', renderMiddle, dashboardPage);
page('/login', renderMiddle, loginPage);
page('/register', renderMiddle, registerPage);
page('/details/:id',renderMiddle,detailsPage);
page('/create',renderMiddle,createPage);
page('/edit/:id',renderMiddle,editPage);
page('/profile',renderMiddle,profilePage);

page.start();




document.getElementById('logoutBtn').addEventListener('click', async () => {
    await authService.logout();
    navigation();
    page.redirect('/home');
});


function renderMiddle(ctx, next) {
    ctx.render = (content) => render(content, contentView);
    ctx.navigation = navigation;
    // ctx.user = getUserData();
    next();
}

function navigation() {
    const email = localStorage.getItem('email');

    if (!email) {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'block';
        

    } else {
        document.querySelector('span').textContent = `Welcome, ${email}`
        document.getElementById('user').style.display = 'block';
        document.getElementById('guest').style.display = 'none';
       
    }
}
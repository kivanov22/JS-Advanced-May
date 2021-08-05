import page from "./node_modules/page/page.mjs";
import authService from "./services/authService.js";
import { homePage } from './pages/homePage.js';
import { registerPage } from './pages/registerPage.js';
import { loginPage } from './pages/loginPage.js';
import { carListingPage } from "./pages/carListingsPage.js";
import { editPage } from "./pages/editPage.js";
import { detailsPage } from "./pages/detailsPage.js";
import { createPage } from "./pages/createPage.js";
import { myListingsPage } from "./pages/myListingsPage.js";
import { searchPage } from "./pages/searchPage.js";
import { render } from './node_modules/lit-html/lit-html.js';
import { getUserData } from "./utils/utility.js";


let container = document.getElementById('container');
let contentView = document.getElementById('site-content');


page('index.html', '/home');
page('/', '/home');

page('/home', renderMiddle, homePage);
page('/login', renderMiddle, loginPage);
page('/register', renderMiddle, registerPage);
page('/allListings', renderMiddle, carListingPage);
page('/details/:id', renderMiddle, detailsPage);
page('/create', renderMiddle, createPage);
page('/edit/:id', renderMiddle, editPage);
page('/myListings', renderMiddle, myListingsPage);
page('/search', renderMiddle, searchPage);

navigation();
page.start();

document.getElementById('logoutBtn').addEventListener('click', async () => {
    await authService.logout();
    navigation();
    page.redirect('/home');
});

function renderMiddle(ctx, next) {
    ctx.render = (content) => render(content, contentView);
    ctx.navigation = navigation;
    ctx.user = getUserData();
    // ctx.user = authService.getAuthToken('authToken');//??
    next();
}


function navigation() {
    // let user = authService.isLoggedIn();
    // let username = authService.getUsername();
    const user = getUserData();

    if (user) {
        document.getElementById('profile').style.display = 'block';
        document.getElementById('guest').style.display = 'none';
        document.getElementById('wlcUser').textContent = `Welcome ${user.username}`;
    } else {
        document.getElementById('profile').style.display = 'none';
        document.getElementById('guest').style.display = 'block';
    }
}

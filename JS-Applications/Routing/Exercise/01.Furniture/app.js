import navigationBar from './navigation/navigationBar.js';
import page from './node_modules/page/page.mjs';
import dashboardPage from './pages/dashboard/dashboardPage.js';
import loginPage from './pages/login/loginPage.js';
import registerPage from './pages/register/registerPage.js';
import renderMiddle from './renderMiddle/renderMiddle.js';
import editPage from './pages/edit/editPage.js';
import createFurniture from './pages/createFurniture/createFurniture.js';
import detailsPage from './pages/details/detailsPage.js';
import myFurniture from './pages/myFurniture/myFurniturePage.js';
// console.log(page);

let viewContainer = document.getElementById('viewContainer');
let navContainer = document.getElementById('navigation');
renderMiddle.setup(viewContainer, navContainer);

page('/index.html', '/dashboard');//call base root
page('/', '/dashboard');//main root call give him homepage dashboard

page('/dashboard', renderMiddle.decorateContext, navigationBar.getView, dashboardPage.getView);
page('/login', renderMiddle.decorateContext, navigationBar.getView, loginPage.getView);
page('/register', renderMiddle.decorateContext, navigationBar.getView, registerPage.getView);
page('/edit', renderMiddle.decorateContext, navigationBar.getView, editPage.getView);
page('/create', renderMiddle.decorateContext, navigationBar.getView, createFurniture.getView);
page('/details', renderMiddle.decorateContext, navigationBar.getView, detailsPage.getView);
page('/my-furniture', renderMiddle.decorateContext, navigationBar.getView, myFurniture.getView);
page('/logout', async (context) => { await authService.logout(); context.page.redirect('/login'); });
page.start();
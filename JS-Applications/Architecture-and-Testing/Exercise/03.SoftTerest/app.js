

setup();

async function setup() {
    let linkClass = 'link';
    let linkSelector = `.${linkClass}`;

    //Take pages
    loginPage.initialize(document.getElementById('login-page'));
    registerPage.initiliaze(document.getElementById('register-page'));
    homePage.initiliaze(document.getElementById('home-page'), linkClass);
    createIdeaPage.initiliaze(document.getElementById('create-page'));
    ideaDetailsPage.initiliaze(document.getElementById('details-page'), linkClass);
    dashboardPage.initiliaze(document.getElementById('dashboard-holder'), linkClass);

    nav.initialize(document.querySelector('nav'));

    let appElement = document.getElementById('app');

    viewChanger.initiliaze(appElement, '.view');
    viewFinder.initiliaze(document.querySelectorAll(linkSelector), linkSelector, viewChanger.changeView);

    viewFinder.navigateTo('home');
}
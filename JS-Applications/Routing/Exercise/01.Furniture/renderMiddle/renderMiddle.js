import { render } from './../node_modules/lit-html/lit-html.js';

let viewContainer = undefined;
let navContainer = undefined;

function setup(viewContainerDom, navDom) {
    viewContainer = viewContainerDom;
    navContainer = navDom;
}

async function renderView(templateResult) {
    render(templateResult, viewContainer);
}

async function renderNav(templateResult) {
    render(templateResult, navContainer);
}

function decorateContext(ctx, next) {
    ctx.renderView = renderView;
    ctx.renderNav = renderNav;
    next();
}

export default {
    setup,
    renderNav,
    renderView,
    decorateContext
}
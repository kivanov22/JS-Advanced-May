import authService from '../services/authService.js';
import { navigationTemplate } from "./navigationBarTemplate.js"


function getView(context, next) {

    let navInfo = {
        isLoggedIn: authService.isLoggedIn(),
        currentPage: context.pathname
    }

    let templateResult = navigationTemplate(navInfo);
    context.renderNav(templateResult);
    next();
}

export default {
    getView
}
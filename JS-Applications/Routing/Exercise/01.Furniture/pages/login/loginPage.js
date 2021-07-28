import authService from '../../services/authService.js';
import { loginTemplate } from './loginTemplate.js';

async function onSubmit(context, e) {
    e.preventDefault();

    let form = e.target;
    let formData = new FormData(form);

    let email = formData.get('email');
    let password = formData.get('password');

    if (email === '' || password === '') {
        alert('All fields are required');
        return;
    }
    let user = {
        email,
        password
    }

    let loginResult = await authService.login(user);
    context.page.redirect('/dashboard');

}


async function getView(context) {
    let boundOnSubmit = onSubmit.bind(null, context);
    let form = {
        onSubmit: boundOnSubmit
    }

    let templateResult = loginTemplate(form);
    context.renderView(templateResult);
}

export default {
    getView
}

import authService from "../../services/authService.js";
import { registerTemplate } from "./registerTemplate.js";


async function onSubmit(context, e) {
    e.preventDefault();

    let form = e.target;
    let formData = new FormData(form);
    //can check for password match 

    let user = {
        email: formData.get('email'),
        password: formData.get('password')
    }

    let registerResult = await authService.register(user);
    context.page.redirect('/dashboard');

}

async function getView(context) {
    let onSubmitBound = onSubmit.bind(null, context);

    let form = {
        onSubmit: onSubmitBound
    }
    let templateResult = registerTemplate(form);
    context.renderView(templateResult);

}

export default {
    getView
}
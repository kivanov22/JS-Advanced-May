import { html } from '../node_modules/lit-html/lit-html.js';
import authService from '../services/authService.js';



let loginTemplate = (onSubmit) => html`
    <!-- Login Page ( Only for Guest users ) -->
    <section id="login-page" class="login">
            <form id="login-form" action="" method="" @submit=${onSubmit}>
                <fieldset>
                    <legend>Login Form</legend>
                    <p class="field">
                        <label for="email">Email</label>
                        <span class="input">
                            <input type="text" name="email" id="email" placeholder="Email">
                        </span>
                    </p>
                    <p class="field">
                        <label for="password">Password</label>
                        <span class="input">
                            <input type="password" name="password" id="password" placeholder="Password">
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Login">
                </fieldset>
            </form>
        </section>`;


export async function loginPage(ctx) {
    ctx.render(loginTemplate(onLoginSubmit));

    async function onLoginSubmit(e) {
        e.preventDefault();
        let formData = new FormData(e.target);//currentTarget

        let email = formData.get('email').trim();
        let password = formData.get('password').trim();

        if (!email || !password) {
            return alert('All fields are required');
        }
        // let loginUser = {
        //      email,
        //     password
        // }
        await authService.login(email,password)
        // e.target.reset();
        ctx.navigation();
        ctx.page.redirect('/home');
    }
}





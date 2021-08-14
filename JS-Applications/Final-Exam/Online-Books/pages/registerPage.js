import { html } from '../node_modules/lit-html/lit-html.js';
import authService from '../services/authService.js';


let registerTemplate = (onSubmit) => html`
    <!-- Register Page ( Only for Guest users ) -->
    <section id="register-page" class="register">
            <form id="register-form" action="" method="" @submit=${onSubmit}>
                <fieldset>
                    <legend>Register Form</legend>
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
                    <p class="field">
                        <label for="repeat-pass">Repeat Password</label>
                        <span class="input">
                            <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Register">
                </fieldset>
            </form>
        </section>`;

export async function registerPage(ctx) {
    ctx.render(registerTemplate(onRegisterSubmit));

    async function onRegisterSubmit(e) {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let email = formData.get('email').trim();
        let password = formData.get('password').trim();
        let repassword = formData.get('confirm-pass').trim();

        if (password !== repassword) {
            return alert('Passwords must match');
        }

        if (!email || !password  || !repassword ) {
            return alert('All fields are required');
        }
        // let user = {
        //      email,
        //     password
        // }
        await authService.register(email,password);
        // e.target.reset();
        ctx.navigation();
        ctx.page.redirect('/home');
    }
}


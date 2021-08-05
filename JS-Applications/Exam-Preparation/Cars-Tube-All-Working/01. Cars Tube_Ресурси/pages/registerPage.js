import { html } from '../node_modules/lit-html/lit-html.js';
import authService from '../services/authService.js';

let registerTemplate = (onSubmit) => html`
    <section id="register">
        <div class="container">
            <form id="register-form" @submit=${onSubmit}>
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr>
    
                <p>Username</p>
                <input type="text" placeholder="Enter Username" name="username" required>
    
                <p>Password</p>
                <input type="password" placeholder="Enter Password" name="password" required>
    
                <p>Repeat Password</p>
                <input type="password" placeholder="Repeat Password" name="repeatPass" required>
                <hr>
    
                <input type="submit" class="registerbtn" value="Register">
            </form>
            <div class="signin">
                <p>Already have an account?
                    <a href="/login">Sign in</a>.
                </p>
            </div>
        </div>
    </section>`;

export async function registerPage(ctx) {
    ctx.render(registerTemplate(onRegisterSubmit));

    async function onRegisterSubmit(e) {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let username = formData.get('username').trim();
        let password = formData.get('password').trim();
        let repassword = formData.get('repeatPass').trim();

        if (password !== repassword) {
            return alert('Passwords must match');
        }

        if (!username || !password  || !repassword ) {
            return alert('All fields are required');
        }
        let user = {
            username,
            password
        }
        await authService.register(user);
        e.target.reset();
        ctx.navigation();
        ctx.page.redirect('/allListings');
    }
}


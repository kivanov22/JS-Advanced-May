import { html } from '../node_modules/lit-html/lit-html.js';
import memeService from '../services/memeService.js';



//TODO: SEt properties memes
let myMemesTemplate = (meme, username, email, gender) => html`
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src="/images/${gender}.png">
        <div class="user-content">
            <p>Username: ${username}</p>
            <p>Email: ${email}</p>
            <p>My memes count: ${meme.length}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
        ${meme.length == 0 ? html`<p class="no-memes">No memes in database.</p>`
            : meme.map(memeTemplateProfile)}


    </div>
</section>`;


let memeTemplateProfile = (meme) => html`<div class="user-meme">
    <p class="user-meme-title">${meme.title}</p>
    <img class="userProfileImage" alt="meme-img" src=${meme.imageUrl  }>
    <a class="button" href="/details/${meme._id}">Details</a>
</div>`;

export async function profilePage(ctx) {
    let memes = await memeService.getMyMemes();
    let username = localStorage.getItem('username');
    let gender = localStorage.getItem('userGender');
    let email = localStorage.getItem('email');
    ctx.render(myMemesTemplate(memes, username, email, gender));
}
import { html } from '../node_modules/lit-html/lit-html.js';
// import authService from '../services/authService.js';
import carService from '../services/carService.js';
import { carListingTemplate } from '../templates/singleListingTemplate.js';

const myListingTemplate = (cars) => html`<section id="my-listings">
<h1>My car listings</h1>
<div class="listings">
    ${cars.length == 0 ? html` <p class="no-cars"> You haven't listed any cars yet.</p>`
     :
    cars.map(carListingTemplate)}
</div>
</section>`;

export async function myListingsPage(ctx){
    // let user = authService.getUserId();
    let cars = await carService.getMyListings(ctx.user._id);//??
    ctx.render(myListingTemplate(cars));
}



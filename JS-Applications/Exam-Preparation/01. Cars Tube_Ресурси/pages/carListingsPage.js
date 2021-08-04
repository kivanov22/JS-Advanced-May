import { html } from '../node_modules/lit-html/lit-html.js';
import { carListingTemplate } from '../templates/singleListingTemplate.js';
import carService from '../services/carService.js';

 let allListingsTemplate = (allListings) => html`
<section id="car-listings">
    <h1>Car Listings</h1>
    <div class="listings">

        
        ${allListings.length ==0 
            ? html` <p class="no-cars">No cars in database.</p>`
         : allListings.map(f => carListingTemplate(f))}      
       
    </div>
</section>`;

export async function carListingPage(ctx) {
    let allListings = await carService.getAllListings();
    ctx.render(allListingsTemplate(allListings));
    ctx.navigation();
}





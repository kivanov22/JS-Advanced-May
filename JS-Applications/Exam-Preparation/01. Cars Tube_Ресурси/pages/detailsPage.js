import { html } from '../node_modules/lit-html/lit-html.js';
import authService from '../services/authService.js';
import carService from '../services/carService.js';

let detailsTemplate = (car, isOwner, onDelete) => html`
    <section id="listing-details">
        <h1>Details</h1>
        <div class="details-info">
            <img src="/images/audia3.jpg">
            <hr>
            <ul class="listing-props">
                <li><span>Brand:</span>${car.brand}</li>
                <li><span>Model:</span>${car.model}</li>
                <li><span>Year:</span>${car.year}</li>
                <li><span>Price:</span>${car.price}$</li>
            </ul>
    
            <p class="description-para">${car.description}</p>
    
            ${isOwner ? html`<div class="listings-buttons">
                <a href="/edit/${car._id}" class="button-list">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" class="button-list">Delete</a>
            </div>`: ''}
        </div>
    </section>`;

export async function detailsPage(ctx) {
    let carId = ctx.params.id;
    let car = await carService.getListingId(carId);
    let isOwner = authService.getUserId() === car._ownerId;
    ctx.render(detailsTemplate(car, isOwner, onDelete));

    async function onDelete() {
        let confirmDelete = confirm('Are you sure you want to Delete?');

        if (confirmDelete) {

            await carService.deleteListing(carId);
            ctx.page.redirect('/allListings');
        }
    }
}






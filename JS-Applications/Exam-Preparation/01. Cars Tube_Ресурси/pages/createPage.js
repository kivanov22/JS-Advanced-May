import { html } from '../node_modules/lit-html/lit-html.js';
import authService from '../services/authService.js';
import carService from '../services/carService.js';

let createTemplate = (onSubmit) => html`
<section id="create-listing">
    <div class="container">
        <form id="create-form" @submit=${onSubmit}>
            <h1>Create Car Listing</h1>
            <p>Please fill in this form to create an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand">

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model">

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description">

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year">

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl">

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price">

            <hr>
            <input type="submit" class="registerbtn" value="Create Listing">
        </form>
    </div>
</section>`;

export async function createPage(ctx) {
    ctx.render(createTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        let formData = new FormData(e.target);

        let brand = formData.get('brand').trim();
        let model = formData.get('model').trim();
        let description = formData.get('description').trim();
        let year = formData.get('year').trim();
        let imageUrl = formData.get('imageUrl').trim();
        let price = formData.get('price').trim();

        if (!brand || !model || !description || !year || !imageUrl || !price) {
            return alert('All fields are required');
        }

        let createCar = {
            brand,
            model,
            description,
            year,
            imageUrl,
            price
        }

        // await authService.isLoggedIn();
        await carService.createListing(createCar);
        e.target.reset();
        ctx.page.redirect('/allListings');


    }
}



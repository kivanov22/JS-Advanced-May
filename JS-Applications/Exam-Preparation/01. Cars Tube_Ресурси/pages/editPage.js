import { html } from '../node_modules/lit-html/lit-html.js';
import carService from '../services/carService.js';

let editTemplate = (car, onSubmit) => html`
    <!-- Edit Listing Page -->
    <section id="edit-listing">
        <div class="container">
    
            <form @submit=${onSubmit} id="edit-form">
                <h1>Edit Car Listing</h1>
                <p>Please fill in this form to edit an listing.</p>
                <hr>
    
                <p>Car Brand</p>
                <input type="text" placeholder="Enter Car Brand" name="brand" .value=${car.brand}>
    
                <p>Car Model</p>
                <input type="text" placeholder="Enter Car Model" name="model" .value=${car.model}>
    
                <p>Description</p>
                <input type="text" placeholder="Enter Description" name="description" .value=${car.description}>
    
                <p>Car Year</p>
                <input type="number" placeholder="Enter Car Year" name="year" .value=${car.year}>
    
                <p>Car Image</p>
                <input type="text" placeholder="Enter Car Image" name="imageUrl" .value=${car.imageUrl}>
    
                <p>Car Price</p>
                <input type="number" placeholder="Enter Car Price" name="price" .value=${car.price}>
    
                <hr>
                <input type="submit" class="registerbtn" value="Edit Listing">
            </form>
        </div>
    </section>`;

export async function editPage(ctx) {
    let carId = ctx.params.id;
    let car = await carService.getListingId(carId);
    ctx.render(editTemplate(car, onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        let formData = new FormData(e.target);
        let brand = formData.get('brand');
        let model = formData.get('model');
        let description = formData.get('description');
        let year = formData.get('year');
        let imgUrl = formData.get('imageUrl');
        let price = formData.get('price');

        if (!brand || !model || !description || !year || !price) {
            return alert('All fields are required');
        }

        let editCar = {
            brand,
            model,
            description,
            year,
            imgUrl,
            price
        }

        await carService.updateListing(carId, editCar);
        e.target.reset();
        ctx.page.redirect(`/details/${carId}`);

    }

}


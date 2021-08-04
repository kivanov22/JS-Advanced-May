import {html } from '../node_modules/lit-html/lit-html.js';
import carService from '../services/carService.js';
import { carListingTemplate } from '../templates/singleListingTemplate.js';

 let searchListingsTemplate = (cars,onSearch,year) =>html`
    <section id="search-cars">
            <h1>Filter by year</h1>

            <div class="container">
                <input id="search-input" type="text" name="search" placeholder="Enter desired production year" .value =${year || ''}>
                <button @click=${onSearch} class="button-list">Search</button>
            </div>

            <h2>Results:</h2>
            <div class="listings">

                <!-- Display all records -->
                <div class="listing">
                    
                ${cars.length == 0 ? html`<p class="no-cars"> No results.</p>` 
                :cars.map(carListingTemplate)}
                
            </div>
        </section>`;

        export async function searchPage(ctx){
            let year = Number(ctx.querystring.split('=')[1]);
            let cars = Number.isNaN(year) ? [] : await carService.search(year);
            ctx.render(searchListingsTemplate(cars,onSearch,year));

            function onSearch(){
                let query = Number(document.getElementById('search-input').value);
                ctx.page.redirect('/search?query=' + query);
            }
        }



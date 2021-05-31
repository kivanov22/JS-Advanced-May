function cityRecord(name, population, treasury){

    const city= {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes(){
            this.treasury+=this.population * this.taxRate;
        },
        applyGrowth(percent){
            this.population += Math.floor(this.population * percent/100);
        },
        applyRecession(percent){
            this.treasury-=Math.floor(this.treasury * percent/100);
        }
    };
    return city;
}

const result = cityRecord('Tortuga', 7000, 15000);
console.log(result)


city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);

    
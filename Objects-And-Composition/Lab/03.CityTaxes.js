function solve(name,population,treasury){

    return {
        name,population,treasury,
        taxRate = 10,
        collectTaxes(){
            this.treasury+=this.population * this.taxRate;
        },
        applyGrowth(percent){
            this.population += Math.floor(this.population * population/100);
        },
        applyRecession(percent){
            this.treasury-=Math.floor(this.treasury * percent/100);
        },
    };
}
console.log(solve());
    
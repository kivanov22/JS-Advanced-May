const {expect , assert} = require('chai');
const dealership = require('../03.DealerShip');


describe("Tests DealerShip logic", ()=> {
    describe("Test newCarCost …", ()=> {

        it("checks if you are returning your old car to the dealers", ()=> {
            let oldCarModel='Audi A4 B8';
           expect(dealership.newCarCost(oldCarModel,25000)).to.deep.equal(10000);
        });

        it("checks if you are returning your old car to the dealers not returning", ()=> {
            let oldCarModel='BMW M4';
           expect(dealership.newCarCost(oldCarModel,25000)).to.deep.equal(25000);
        });
     });

     describe("Test carEquipment …", ()=> {

        it("Test selected extras", ()=> {
            
           expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation','climatronic'],[0, 2])).to.deep.equal(['heated seats','sport rims']);
        });
    });


    describe("Test euroCategory …", ()=> {

        it("Test euro category good and ecology tax", ()=> {
            let total = 14250;
           expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: ${total}.`);
        });

        it("Test euro category bad and ecology tax", ()=> {
            
            expect(dealership.euroCategory(2)).to.equal(`Your euro category is low, so there is no discount from the final price!`);
         });
    });
     
});

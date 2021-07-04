const { expect, assert } = require('chai');
const pizzUni = require('../03.PizzaPlace');

describe("Tests …", function () {
    describe("makeAnOrder(obj) …", function () {

        it("test pizza with no object and only drink…", function () {
           let pizza ={};
           let pizza3 ={orderedDrink:'Whiskey'};

           expect(()=>pizzUni.makeAnOrder(pizza)).to.throw(Error,'You must order at least 1 Pizza to finish the order.');
           expect(()=>pizzUni.makeAnOrder(pizza3)).to.throw(Error,'You must order at least 1 Pizza to finish the order.');
          
        });

        it("test order of pizza and drink , and only pizza …", function () {
            let pizza1 ={orderedPizza:'Kaprichoza' , orderedDrink:'Whiskey'};
            let pizza2 ={orderedPizza:'Kaprichoza'};
            
            expect(pizzUni.makeAnOrder(pizza1)).to.be.equal(`You just ordered Kaprichoza and Whiskey.`);
            expect(pizzUni.makeAnOrder(pizza2)).to.be.equal('You just ordered Kaprichoza');
            
         });



    });
   
    describe('getRemainingWork(statusArr)',()=>{
        it('test array ',()=>{
            let pizza1 = [{pizzaName: 'Kaprichoza', status: 'preparing' }, {pizzaName: 'Margarita', status: 'preparing' }];
            expect(pizzUni.getRemainingWork(pizza1)).to.be.equal('The following pizzas are still preparing: Kaprichoza, Margarita.');

            let pizza2 = [{pizzaName: 'Kaprichoza', status: 'ready' }, {pizzaName: 'Margarita', status: 'ready' }];
            expect(pizzUni.getRemainingWork(pizza2)).to.be.equal('All orders are complete!');

            let pizza3 =  [{pizzaName: 'Kaprichoza', status: 'preparing' }, {pizzaName: 'Margarita', status: 'ready' }];
            expect(pizzUni.getRemainingWork(pizza3)).to.be.equal(`The following pizzas are still preparing: Kaprichoza.`);
        })
    });
   
    describe('test orderType(totalSum, typeOfOrder)',()=>{
        it('test order type',()=>{
        expect(pizzUni.orderType(10,'Carry Out')).to.deep.equal(9);
        expect(pizzUni.orderType(20,'Delivery')).to.deep.equal(20);
        })
    })



});

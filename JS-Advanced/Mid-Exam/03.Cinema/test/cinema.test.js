const { expect, assert } = require('chai');
const cinema = require('../cinema.js');

describe("Tests functionality", function () {
    describe("Test showMovies", function () {
        it("Should throw if empty array", function () {
            let expectedResult = 'There are currently no movies to show.';
            assert.equal(cinema.showMovies([]), expectedResult);
            // assert.equal(cinema.showMovies(['Batman', 'Superman']), expectedResult);
           
        });

        it('Should work with correct data',()=>{
            let expectedResult = 'King Kong, The Tomorrow War, Joker';
            assert.equal(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker']),expectedResult );
            assert.equal(cinema.showMovies(['King Kong', 'The Tomorrow War']),'King Kong, The Tomorrow War');
            assert.equal(cinema.showMovies(['King Kong']),'King Kong');
        })

    });

    describe("Test ticketPrice", function () {
        it("Should return price if present", function () {
            
            assert.equal(cinema.ticketPrice('Premiere'),12.00 );
            assert.equal(cinema.ticketPrice('Normal'), 7.50);
            assert.equal(cinema.ticketPrice('Discount'),5.50 );
        });

        it('should return correct price',()=>{
            expect(cinema.ticketPrice('Premiere')).to.deep.equal(12.00);
        })


        it('Should throw invalid type if not present',()=>{
            // let expectedResult = 'Invalid projection type.';
            expect(() => cinema.ticketPrice('VIP')).to.throw('Invalid projection type.');
        })
    });

    describe("Test swapSeatsHall", ()=> {
        it("Should throw ", ()=> {
            let expectedResult= 'Unsuccessful change of seats in the hall.';
            assert.equal(cinema.swapSeatsInHall(), expectedResult);
            assert.equal(cinema.swapSeatsInHall({},{}), expectedResult);
            assert.equal(cinema.swapSeatsInHall([],[]), expectedResult);
            expect(cinema.swapSeatsInHall(22, 5)).to.be.eql(expectedResult);
            assert.equal(cinema.swapSeatsInHall(-5,-10), expectedResult);
            assert.equal(cinema.swapSeatsInHall(30,30), expectedResult);
            assert.equal(cinema.swapSeatsInHall(true,false), expectedResult);
            assert.equal(cinema.swapSeatsInHall(null,null), expectedResult);
            assert.equal(cinema.swapSeatsInHall(undefined,undefined), expectedResult);
            assert.equal(cinema.swapSeatsInHall('Pesho','Gosho'), expectedResult);
            assert.equal(cinema.swapSeatsInHall('',''), expectedResult);
            assert.equal(cinema.swapSeatsInHall(60,100), expectedResult);
            assert.equal(cinema.swapSeatsInHall(15,15), expectedResult);        
            assert.equal(cinema.swapSeatsInHall(10,), expectedResult);        
            assert.equal(cinema.swapSeatsInHall(0,0), expectedResult);        
            assert.equal(cinema.swapSeatsInHall(0,2), expectedResult);        
            assert.equal(cinema.swapSeatsInHall(2,0), expectedResult);        
            assert.equal(cinema.swapSeatsInHall(3.4,5.5), expectedResult);        
            expect(cinema.swapSeatsInHall(5, 22)).to.be.eql(expectedResult);
            assert.equal(cinema.swapSeatsInHall(20,20), expectedResult);        
            // assert.equal(cinema.swapSeatsInHall(20,15), expectedResult);        
            assert.equal(cinema.swapSeatsInHall(-5,15), expectedResult);        
            assert.equal(cinema.swapSeatsInHall(15,-5), expectedResult);    
            assert.equal(cinema.swapSeatsInHall(5), expectedResult);    
              
            
        });



        it('Should work with correct data',()=>{
            let expectedResult = 'Successful change of seats in the hall.';
            assert.equal(cinema.swapSeatsInHall(5,8), expectedResult); 
            assert.equal(cinema.swapSeatsInHall(1,20), expectedResult);    
            assert.equal(cinema.swapSeatsInHall(20,1), expectedResult); 
        })

        

    });


});

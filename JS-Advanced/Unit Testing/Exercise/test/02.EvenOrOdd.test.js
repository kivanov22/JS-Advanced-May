const {assert} = require('chai');
const isOddOrEven = require('../02.EvenOrOdd');

describe('Testing functionality',()=>{

    it('Should not work when input is not string',()=>{
        let expectedResult = undefined;
        
        assert.equal(isOddOrEven({},expectedResult));
        assert.equal(isOddOrEven([],expectedResult));
        assert.equal(isOddOrEven(true,expectedResult));
        assert.equal(isOddOrEven(null,expectedResult));
        assert.equal(isOddOrEven(0,expectedResult));
        assert.equal(isOddOrEven(undefined,expectedResult));
       // assert.equal(isOddOrEven('',expectedResult));
    });

    it('Should work when input string length is equal',()=>{
        let input = 'Kris';
        let actualResult = isOddOrEven(input);
        let expectedResult = 'even';

         assert.equal(actualResult,expectedResult);
    });
   
    it('Should work when input string length is odd',()=>{
        let input = 'Krisk';
        let actualResult = isOddOrEven(input);
        let expectedResult = 'odd';
        
         assert.equal(actualResult,expectedResult);
    });
   
});


//Trivial casses
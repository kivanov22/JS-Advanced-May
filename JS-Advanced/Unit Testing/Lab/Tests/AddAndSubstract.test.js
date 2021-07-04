const assert = require('chai').assert;
const createCalculator = require('../07.AddAndSubrastract');

describe('Check functionalities',()=>{

    it('Return a module with objest containing functions',()=>{
      let calculator = createCalculator();
      assert.equal(typeof calculator,'object');

    });

    it('Add number should work',()=>{
        let calculator = createCalculator();
        calculator.add(1);
        let expectedResult = 1;
        let actualResult= calculator.get();
        assert.equal(actualResult,expectedResult);
  
     });

     it('Substract number should work',()=>{
        let calculator = createCalculator();
        calculator.subtract(2);
        let expectedResult = -2;
        let actualResult= calculator.get();
        assert.equal(actualResult,expectedResult);
  
     });

     it('Multiple add and substract should work',()=>{
        let calculator = createCalculator();
        calculator.add(10);
        calculator.subtract(2);
        calculator.add(2);
        calculator.subtract(10);
        let expectedResult = 0;
        let actualResult= calculator.get();
        assert.equal(actualResult,expectedResult);
      
     });

     it('Multiple adding and substracting with numbers as strings',()=>{
        let calculator = createCalculator();
        calculator.add('2');
        calculator.subtract(2);
        calculator.add('3');
        calculator.subtract(3);
        let expectedResult = 0;
        let actualResult= calculator.get();
        assert.equal(actualResult,expectedResult);
  
     });

     it('Should not work with different types of input',()=>{
        let calculator = createCalculator();
        calculator.add('a');
        calculator.subtract(2);
        calculator.add('3');
        calculator.subtract(3);
       
        let actualResult= calculator.get();
        assert.isNaN(actualResult);
     });
});
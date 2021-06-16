const { assert } = require('chai');
const sum = require('../04.SumNumbers');

it('Should work',()=>{
 //Arrange
 let input = [1,2,3,4,5];
 let expectedResult=15;
 //Act
let actualResult=sum(input);
 //Assert
assert.strictEqual(actualResult,expectedResult);
});
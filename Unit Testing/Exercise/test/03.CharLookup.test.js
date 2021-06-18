const {assert} = require('chai');
const lookupChar = require('../03.CharLookup');

// •	Returning undefined
// •	Returning an empty string
// •	Returning the char at the specified index
//incorrect type, undefined should be returned
//a floating-point number. 
//returning an empty string if we get passed an index that is a negative number or an index which is outside of the bounds of the string.
//correct result

describe('Checking functionality',()=>{
  it('Should return undefined when incorrect type',()=>{
    
    let expectedResult= undefined;

    assert.equal(lookupChar('',''),expectedResult);
    assert.equal(lookupChar({},{}),expectedResult);
    assert.equal(lookupChar([],[]),expectedResult);
    assert.equal(lookupChar(''),expectedResult);
    assert.equal(lookupChar('Kris',5.33),expectedResult);
    assert.equal(lookupChar(5),expectedResult);
    assert.equal(lookupChar(5,-3),expectedResult);
    assert.equal(lookupChar(5,3),expectedResult);
    assert.equal(lookupChar(5.33,8.45),expectedResult);
    assert.equal(lookupChar(null,null),expectedResult);
    assert.equal(lookupChar(undefined,undefined),expectedResult);
    assert.equal(lookupChar(true,false),expectedResult);
   
    
  });
   
  it('Should return incorrect index when number conditions not met',()=>{
    
    let expectedResult= "Incorrect index";

    
    
   assert.equal(lookupChar('Kris',-3),expectedResult);
   assert.equal(lookupChar('Kris',255),expectedResult);
   assert.equal(lookupChar('Kris',4),expectedResult);
   assert.equal(lookupChar('',0),expectedResult);
    assert.equal(lookupChar('',-3),expectedResult);
    
  });

  it('Should return correct string when index is correct',()=>{
    
    
    let expectedResult= "i";

    
    
   assert.equal(lookupChar('Kris',2),expectedResult);
  // assert.equal(lookupChar('Kris',255),expectedResult);
    
  });

});
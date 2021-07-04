const { assert,expect } = require('chai');
const isSymmetric = require('../05.CheckforSymmetry');

describe('Test isSymetric functionality', () => {
    it('Should return true when array is Symetric', () => {
        let input = [1, 2, 3, 2, 1];
        let expectedResult = true;

        let actualResult = isSymmetric(input);

        assert.equal(actualResult, expectedResult);
    });

    it('Should return false when array is not Symetric', () => {
        let input = [1, 2, 3, 3, 1];
        let expectedResult = false;

        let actualResult = isSymmetric(input);

        assert.equal(actualResult, expectedResult);
    });


    it('Should return false when incorrect input type',()=>{
        
        let expectedResult=false;

        assert.equal(isSymmetric(null),expectedResult);
        assert.equal(isSymmetric({}),expectedResult);
        assert.equal(isSymmetric(''),expectedResult);
        assert.equal(isSymmetric(undefined),expectedResult);
        assert.equal(isSymmetric(true),expectedResult);
        assert.equal(isSymmetric(0),expectedResult);
        assert.equal(isSymmetric(['1',0,'2',3]),expectedResult);

    });

    it('Should pass  when get empty array',()=>{
      let expectedResult=true;

      assert.equal(isSymmetric([]),expectedResult);

    });

    it('Should pass when string array is provided',()=>{
     let actualResult =isSymmetric(['pesho','gosho','pesho']);

     expect(actualResult).to.be.true;
    });

    it('Should fail',()=>{
        let actualResult =isSymmetric(['1',1]);
   
        expect(actualResult).to.be.false;
       });
});

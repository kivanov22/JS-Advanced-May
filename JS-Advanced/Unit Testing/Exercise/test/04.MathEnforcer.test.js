const { assert ,expect} = require('chai');
const mathEnforcer = require('../04.MathEnforcer');


describe('Check functionality', () => {

    it('When number is added should work', () => {
        let adding = mathEnforcer.addFive(5);

        let expectedResult = 10;

        assert.equal(adding, expectedResult);
        expect(mathEnforcer.addFive(1.1 + 2.2)).to.closeTo(8.3, 0.01);
    });

    it('When number is substracted should work', () => {
        let adding = mathEnforcer.subtractTen(5);

        let expectedResult = -5;

        assert.equal(adding, expectedResult);
        expect(mathEnforcer.subtractTen(1.1 + 2.2)).to.closeTo(-6.7, 0.01);
    });

    it('When number is summed should work', () => {
        let adding = mathEnforcer.sum(5,5);

        let expectedResult = 10;

        assert.equal(adding, expectedResult);
        expect(mathEnforcer.sum(1.1 + 2.2, 3.3)).to.closeTo(6.6, 0.01);
    });

    it('When number is added should not work', () => {


        let expectedResult = undefined;

        assert.equal(mathEnforcer.addFive({}), expectedResult);
        assert.equal(mathEnforcer.addFive([]), expectedResult);
        assert.equal(mathEnforcer.addFive(null), expectedResult);
        assert.equal(mathEnforcer.addFive(true), expectedResult);
        assert.equal(mathEnforcer.addFive(undefined), expectedResult);
        assert.equal(mathEnforcer.addFive(), expectedResult);
        assert.equal(mathEnforcer.addFive(''), expectedResult);


    });

    it('When number is substracted should not work', () => {


        let expectedResult = undefined;

        assert.equal(mathEnforcer.subtractTen({}), expectedResult);
        assert.equal(mathEnforcer.subtractTen([]), expectedResult);
        assert.equal(mathEnforcer.subtractTen(null), expectedResult);
        assert.equal(mathEnforcer.subtractTen(true), expectedResult);
        assert.equal(mathEnforcer.subtractTen(undefined), expectedResult);
        assert.equal(mathEnforcer.subtractTen(), expectedResult);
        assert.equal(mathEnforcer.subtractTen(''), expectedResult);


    });

    it('When number is summed should not work', () => {


        let expectedResult = undefined;

        assert.equal(mathEnforcer.sum({},{}), expectedResult);
        assert.equal(mathEnforcer.sum([],[]), expectedResult);
        assert.equal(mathEnforcer.sum(null,null), expectedResult);
        assert.equal(mathEnforcer.sum(true,false), expectedResult);
        assert.equal(mathEnforcer.sum(undefined,undefined), expectedResult);
        assert.equal(mathEnforcer.sum(), expectedResult);
        assert.equal(mathEnforcer.sum(''), expectedResult);
        assert.equal(mathEnforcer.sum(0), expectedResult);
        //assert.equal(mathEnforcer.sum(0,0), expectedResult);
        assert.equal(mathEnforcer.sum('',0), expectedResult);
        // assert.closeTo(mathEnforcer.sum(5.354858345,2.238949312874), expectedResult,0.01,'undefined');//?
        // assert.closeTo(mathEnforcer.sum(5.343525325,5.343525325, expectedResult, 'undefined',));

       

    });
    
    it('Check how behaves negative values when added', () => {
        let adding = mathEnforcer.addFive(-5);

        let expectedResult = 0;

        assert.equal(adding, expectedResult);
    });

    it('Check how behaves negative values when substracted', () => {
        let substracting = mathEnforcer.subtractTen(-5);

        let expectedResult = -15;

        assert.equal(substracting, expectedResult);
    });

    it('Check how behaves negative values when summed', () => {
        let summing = mathEnforcer.sum(-5,-5);

        let expectedResult = -10;

        assert.equal(summing, expectedResult);
    });
});
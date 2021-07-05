const { expect, assert } = require('chai');
const testNumbers = require('../testNumbers');


describe("Test functionality", function () {

    describe("Test sumNumber", function () {

        it("Test check if params are numbers …", function () {
            let expectedResult = 10.00;

            assert.equal(testNumbers.sumNumbers(5, 5), expectedResult);
            // expect(testNumbers.sumNumbers(5,5)).to.closeTo(10,00);
        });

        it("Test check if params are numbers …", function () {
            let expectedResult = -10.00;
            assert.equal(testNumbers.sumNumbers(-5, -5), expectedResult);
        });

        it("Test check if params are not  numbers …", function () {


            let expectedResult = undefined;

            assert.equal(testNumbers.sumNumbers('', ''), expectedResult);
            assert.equal(testNumbers.sumNumbers({}, {}), expectedResult);
            assert.equal(testNumbers.sumNumbers([], []), expectedResult);
            assert.equal(testNumbers.sumNumbers(true, false), expectedResult);
            assert.equal(testNumbers.sumNumbers(null, null), expectedResult);
            assert.equal(testNumbers.sumNumbers(null, null), expectedResult);
            assert.equal(testNumbers.sumNumbers('Pesho', 'Gosho'), expectedResult);
            assert.equal(testNumbers.sumNumbers(), expectedResult);
        });
    });

    describe("Test numberChecker", function () {

        it("Test if input parsed", function () {

            expect(() => testNumbers.numberChecker({}, {})).to.throw('The input is not a number!');
            // expect(()=>testNumbers.numberChecker([],[])).to.throw('The input is not a number!');
            //expect(()=>testNumbers.numberChecker(true,false)).to.throw('The input is not a number!');
            // expect(()=>testNumbers.numberChecker('','')).to.throw('The input is not a number!');
            //expect(()=>testNumbers.numberChecker(null,null)).to.throw('The input is not a number!');
            expect(() => testNumbers.numberChecker(undefined, undefined)).to.throw('The input is not a number!');
            expect(() => testNumbers.numberChecker()).to.throw('The input is not a number!');

        });

        it("Test if input is even", function () {

            expect(testNumbers.numberChecker(2)).to.be.equal('The number is even!');


        });

        it("Test if input is odd", function () {

            expect(testNumbers.numberChecker(5)).to.be.equal('The number is odd!');


        });
    });

    describe("Test averageSumArray", function () {

        it("Test check if array is summed …", function () {
            // let expectedResult = 10.00;

            assert.strictEqual(testNumbers.averageSumArray([2],[2]), 2);

            expect(testNumbers.sumNumbers('5')).to.equal(undefined);
            assert.strictEqual(testNumbers.averageSumArray([1],[2]), 1);
            assert.deepEqual(testNumbers.averageSumArray(['a','b','c'],['b','c','cd']), NaN);
        });

        
    });

});

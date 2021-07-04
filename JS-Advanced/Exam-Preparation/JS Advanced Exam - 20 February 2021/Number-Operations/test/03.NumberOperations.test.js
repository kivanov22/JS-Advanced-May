const { expect, assert } = require('chai');
const numberOperations = require('../03. Number Operations_Resources');

describe("Number Operations test functionality …", () => {
    describe("Test	powNumber …", () => {
        it("Test function returns the power of the given number …", () => {
            expect(numberOperations.powNumber(2)).to.be.equal(4);
        });
    });


    describe("Test	numberChecker …", () => {
        it("Test function returns the power of the given number …", () => {
            expect(numberOperations.numberChecker(2)).to.be.equal('The number is lower than 100!');
        });

        it("Test function returns the power of the given number …", () => {
            expect(numberOperations.numberChecker('30')).to.be.equal('The number is lower than 100!');
        });

        it("Test function returns the power of the given number …", () => {
            expect(numberOperations.numberChecker(-1)).to.be.equal('The number is lower than 100!');
        });

        it("Test function returns the power of the given number …", () => {
            expect(numberOperations.numberChecker('150')).to.be.equal('The number is greater or equal to 100!');
        });

        it("Test function returns the power of the given number …", () => {
            expect(numberOperations.numberChecker(150)).to.be.equal('The number is greater or equal to 100!');
        });

        it("Test function returns the power of the given number …", () => {
            expect(numberOperations.numberChecker(100)).to.be.equal('The number is greater or equal to 100!');
        });

        it("Test If the input is not a number the function throws an error …", () => {
            expect(()=>numberOperations.numberChecker('Test')).to.throw(Error,'The input is not a number!');
           
        });

    });

    describe("Test	sumArrays …", () => {
        it("Test summing of two arrays first index …", () => {
            expect(numberOperations.sumArrays([3,4,5], [5,3,7])).to.deep.equal([ 8, 7, 12 ]);
        });

        it("Test summing of two arrays first index …", () => {
            expect(numberOperations.sumArrays([3,4,5], [5,3,7,8])).to.deep.equal([ 8, 7, 12, 8 ]);
        });

        it("Test summing of two arrays first index …", () => {
            expect(numberOperations.sumArrays([3], [5])).to.deep.equal([ 8 ]);
        });

        it("Test summing of two arrays first index …", () => {
            expect(numberOperations.sumArrays([], [])).to.deep.equal([ ]);
        });
    });
});

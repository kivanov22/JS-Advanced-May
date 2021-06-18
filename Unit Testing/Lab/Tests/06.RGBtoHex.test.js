const assert = require('chai').assert;
const rgbToHexColor = require('../06.RGBtoHex');

describe('Check functionality of function', () => {

  it('Should return correct values for color', () => {
    let red = 3;
    let green = 15;
    let blue = 30;

    let expectedResult = '#030F1E';

    let actualResult = rgbToHexColor(red, green, blue);

    assert.equal(actualResult, expectedResult);
  });

  it('Should return undefined when invalid type', () => {
    let red = 'red';
    let green = 'green';
    let blue = 'blue';

    let expectedResult = undefined;

    let actualResult = rgbToHexColor(red, green, blue);

    assert.equal(actualResult, expectedResult);
  });

  it('Should return undefined when out of range below 0', () => {
    let red = -1;
    let green = -3;
    let blue = -5;

    let expectedResult = undefined;

    let actualResult = rgbToHexColor(red, green, blue);

    assert.equal(actualResult, expectedResult);
  });

  it('Should return undefined when out of range above 255', () => {
    let red = 600;
    let green = 900;
    let blue = 255;

    let expectedResult = undefined;

    let actualResult = rgbToHexColor(red, green, blue);

    assert.equal(actualResult, expectedResult);
  });

  it('Should return undefined when incorrect type', () => {


    let expectedResult = undefined;

    assert.equal(rgbToHexColor({}, {}, {}), expectedResult);
    assert.equal(rgbToHexColor(null, {}, null), expectedResult);
    assert.equal(rgbToHexColor(undefined, {}, null), expectedResult);
    assert.equal(rgbToHexColor([], {}, null), expectedResult);
    assert.equal(rgbToHexColor(true, {}, null), expectedResult);
    assert.equal(rgbToHexColor('', '', null), expectedResult);
    assert.equal(rgbToHexColor(), expectedResult);
    assert.equal(rgbToHexColor(05), expectedResult);
    assert.equal(rgbToHexColor(0.5, 5, 5, 6, 5), expectedResult);
    assert.equal(rgbToHexColor(050050, 5, 5, 6, 5), expectedResult);
    assert.equal(rgbToHexColor(0, 10, undefined), expectedResult);
    assert.equal(rgbToHexColor(0, undefined, undefined), expectedResult);
    assert.equal(rgbToHexColor(undefined, undefined, undefined), expectedResult);//
    assert.equal(rgbToHexColor(0, 10, -1), expectedResult);
    assert.equal(rgbToHexColor(0, -30, -1), expectedResult);
    assert.equal(rgbToHexColor(-10, -15, -30), expectedResult);//
    assert.equal(rgbToHexColor('b', 30, 50), expectedResult);//
    assert.equal(rgbToHexColor('b', 'b', 50), expectedResult);//
    assert.equal(rgbToHexColor(false, 'b', 50), expectedResult);//




  });

  it('converts black to hex', () => {
    expect(rgbToHexColor(0, 0, 0)).to.equal('#000000')
  })

  it('converts white to hex', () => {
    expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF')
  })

});

function subtract() {
    console.log('TODO:...');

    let firstNumber =document.getElementById('firstNumber').value;
    let secondNumber =document.getElementById('secondNumber').value;
    
    let diff  =Number(firstNumber)-Number(secondNumber);

    let result = document.getElementById('result');
    result.textContent=diff;

}
function sumOfNumbers(num1, num2){
    let n =Number(num1);
    let m =Number(num2);
    let result=0;

    for(let i = n;i<=m; i++){
        result +=i;
       
    }
    return result;
}
let total = sumOfNumbers('1', '5');
console.log(total);
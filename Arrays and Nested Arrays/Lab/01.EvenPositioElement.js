function even(inputArr){

    let result = [];

    for (let i = 0; i< inputArr.length; i++) {
       
        if (i%2==0) {
            result[result.length]=inputArr[i];
        }
        
    }
    return result.join(' ');
}
console.log(even(['20', '30', '40', '50', '60']));
console.log(even(['5', '10']));


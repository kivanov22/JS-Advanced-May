function solve(arrInput){
    arrInput.sort((a,b)=>a-b);
    arrInput.splice(2,arrInput.length-1);
    return arrInput.join(', ');
}
console.log(solve([30, 15, 50, 5]));
console.log(solve([3, 0, 10, 4, 7, 3]));


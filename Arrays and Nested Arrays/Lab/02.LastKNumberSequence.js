function sequence(n,k){

   let result = [1];


    for (let i = 1; i < n; i++) {
        let startIndex = Math.max(0,i-k);//find first position from where to start summing
        let currentElement = result.slice(startIndex,startIndex+k).reduce((a,b)=>a+b,0);//sum of three elements k - slice, reduce 
        result.push(currentElement);
    }
    return result.join(', ');
}
console.log(sequence(6, 3));
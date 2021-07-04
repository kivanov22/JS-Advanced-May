function solve(num){
    const string = num.toString();
    let isSame = true;
    let sum=0;

    for (let index = 0; index < string.length; index++) {
       // const element = array[index];
        let next = string[index+1];
        
        if (string[index]!=string[index+1] && next!==undefined) {
            isSame=false;
        }

        sum+=Number(string[index]);//cast to Number transform from string to number  or sum=sum ++ string[index]
    }

    return `${isSame}\n${sum}`;
    
}
console.log(solve(2222222));
console.log(solve(1234));
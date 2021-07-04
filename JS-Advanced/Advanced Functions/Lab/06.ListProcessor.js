function solve(input){
    
    let result = [];
    for (let i = 0; i < input.length; i++) {
        let[comm, word] =input[i].split(' ');

        if(comm=='add'){
        result.push(word);
    }
    else if(comm=='remove'){
        result.shift(word);
    }
    else if(comm=='print'){
        console.log(result.join(','));
    }
    }
    
    //return result.join(',');
    
}
console.log(solve(['add hello', 'add again', 'remove hello', 'add again', 'print']));
console.log(solve(['add pesho', 'add george', 'add peter', 'remove peter','print']));
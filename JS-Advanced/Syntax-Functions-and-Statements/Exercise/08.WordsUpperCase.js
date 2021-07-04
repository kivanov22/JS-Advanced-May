function solve(text) {
    let result = text.toUpperCase()
      .match(/\w+/g)
      .join(', ');
    
    console.log(result);
  }
console.log(solve("Hi, how are you?"));
// let newArr = [];
//   //arr.toUpperCase();
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i].toUpperCase();
//     newArr.push(element);
//   }
  
//   return newArr.join(', ');
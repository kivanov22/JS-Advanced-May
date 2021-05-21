function square(num) {
 
  let myNum = Number(num);

  for (let i = 1; i <= myNum; i++) {
      let line = '';
      for (let k = 1; k <= myNum; k++) {
          line += '* ';
      }
      console.log(line);
  }
}
// function solve(num){
//   let n = Number(num);
  

//   for (let i = 1; i <= n; i++) {
//     let line='';
//     for (let j = 1; j <= n; j++) {
      
//       line+='* ';
//     }
//     console.log(line);
//   }
  
  
// }
console.log(square([5]));


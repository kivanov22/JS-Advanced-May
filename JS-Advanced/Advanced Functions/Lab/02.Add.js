function solution(num) {
    let sum =0;
    sum=num;
   return function calc(a){
       sum =num+a;
      return sum;
   }
}
// let f = (function solution(input) {
//     let total = input;
//     return function sum(a) {
//         total += a;
//         sum.toString = () => total;
//         return sum;
//     }
// })();
let add5=solution(5);
console.log(add5(2));
console.log(add5(3));

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));

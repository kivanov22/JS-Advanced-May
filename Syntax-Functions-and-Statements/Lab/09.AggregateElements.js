function solve(arr) {
  let newArr = [];
  let sum = 0;
  let arrAsString = "";

  let dividingSum = 0;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    sum += element;
    dividingSum += 1 / element;
    arrAsString += element;
  }
  newArr.push(sum);
  newArr.push(dividingSum);
  newArr.push(arrAsString);
  return newArr.join("\n");
}
console.log(solve([1, 2, 3]));

function solve(num, com1, com2, com3, com4, com5) {
  let number = +num;

  const arr = [com1, com2, com3, com4, com5];

  for (let index = 0; index < arr.length; index++) {
    switch (arr[index]) {
      case "chop":
        number /= 2;
        console.log(number);
        break;
      case "dice":
        number = Math.sqrt(number);
        console.log(number);
        break;
      case "spice":
        number += 1;
        console.log(number);
        break;
      case "bake":
        number *= 3;
        console.log(number);
        break;
      case "fillet":
        number -= number * 0.2;
        console.log(number);
        break;
    }
  }
}
console.log(solve("32", "chop", "chop", "chop", "chop", "chop"));

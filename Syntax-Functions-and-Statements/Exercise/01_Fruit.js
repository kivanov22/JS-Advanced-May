function order(fruit,weight,price){
const weightKg = weight/1000;
const money = weightKg*price;
    return `I need $${money.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`;
}

console.log(order('orange',2500,1.80))
console.log(order('apple',1563,2.35))
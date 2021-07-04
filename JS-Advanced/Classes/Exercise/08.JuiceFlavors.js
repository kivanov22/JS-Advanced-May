function solve(arr) {
    //let result = [];
    let totalJuice = new Map;
    let totalBottles = new Map;

    for (let i = 0; i < arr.length; i++) {
        let [fruit, quantity] = arr[i].split('=>');
        quantity = Number(quantity);


        if (!totalJuice.has(fruit)) {
            totalJuice.set(fruit, 0);
        }
        let currentQuantity = totalJuice.get(fruit);
        currentQuantity += quantity;

        if (currentQuantity >= 1000) {
            let juiceLeft = currentQuantity % 1000;

            let bottlesToStore = (currentQuantity - juiceLeft) / 1000;

            if (!totalBottles.has(fruit)) {
                totalBottles.set(fruit, 0);
            }
            totalBottles.set(fruit, totalBottles.get(fruit) + bottlesToStore);
            quantity = juiceLeft;
        }
        totalJuice.set(fruit, totalJuice.get(fruit) + quantity);
        // if (!result[juice]) {
        //     result[juice] += juice;
        // }

        // if (result[juice] === juice) {
        //     result[juice] += quantity;
        // } else {

        //     result[juice] = quantity;
        // }

        // let juices = new Juice(juice, quantity);

    }
    for (const [juicee, bottles] of totalBottles) {
        console.log(juicee + '=> ' + bottles);
    }
}
solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
);
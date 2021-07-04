function solve(arrStrings) {
    let totalCars = new Map();

    for (let i = 0; i < arrStrings.length; i++) {
        let [carBrand, carModel, producedCars] = arrStrings[i].split(' | ');
        producedCars = Number(producedCars);


        if (!totalCars.has(carBrand)) {

            totalCars.set(carBrand, new Map);//When make a collection with 3 parameters
        }

        if (!totalCars.get(carBrand).has(carModel)) {
            totalCars.get(carBrand).set(carModel, 0);//set Audi Q7 1000
        }
        totalCars.get(carBrand).set(carModel, totalCars.get(carBrand).get(carModel) + producedCars);
    }
    for (const [carBrand, carModel] of totalCars) {
        console.log(carBrand);

        for (const [model, quantity] of carModel) {
            console.log('###' + model + ' -> ' + quantity);
        }
    }
}
console.log(solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
));
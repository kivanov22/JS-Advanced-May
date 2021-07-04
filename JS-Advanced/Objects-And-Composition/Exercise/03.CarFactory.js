function solve(car) {

    let result = {
        model: '',
        engine: {},
        carriage: {},
        wheels: [],
    };
    const { model, power, color, carriage, wheelsize } = car;//destructure

    
    result['model'] = model;

    //find Engine
    const engines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 }
    ];

    let engine = engines.find(el => el.power >= power);//object

    result['engine'] = engine;//['engine']


    //FInd Carriage
    const carriages = [
        { type: 'hatchback', color: color },
        { type: 'coupe', color: color },

    ]
    let findCarriage = carriages.find(el => el.type === carriage)

    if (carriage === 'hatchback') {
        result['carriage'] = findCarriage;
    }
    else if (carriage === 'coupe') {
        result['carriage'] = findCarriage;
    }


    //FIND wheels

    let rounded = Math.floor(wheelsize) % 2 === 0 
    ? Math.floor(wheelsize) -1 
    : wheelsize;
    let convertToArray = [rounded,rounded,rounded,rounded];
    result['wheels'] = convertToArray;

    return result;
}
console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));

console.log(solve({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
));
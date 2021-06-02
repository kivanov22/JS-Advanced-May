function solve(arr){
    let heroAsArray = [];

    for (let i = 0; i < arr.length; i++) {
        let[name,level,items] = arr[i].split(' / ');//split to ['Isacc / 25 / Apple, GravityGun'] -> name, level , items
        level = Number(level);//parse to number
        items = items !== undefined ? items.split(', ') : [];
        heroAsArray.push({name: name , level: level, items: items});

    }
    return JSON.stringify(heroAsArray);
}
console.log(solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
));
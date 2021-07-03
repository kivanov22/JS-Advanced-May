function solve(input) {

    let [columns, ...table] = input.map(splitLine);

    function removeEmptyString(x) {
        return x !== '';
    }

    function convertToNumber(x) {
        return isNaN(x) ? x : Number(Number(x).toFixed(2));
    }

    function splitLine(input) {
        return input.split('|').filter(removeEmptyString).map(x => x.trim()).map(convertToNumber);
    }
    return JSON.stringify(table.map(entry=>{
        return columns.reduce((acc,curr,index)=>{
            acc[curr]=entry[index];
            return acc;
        },{})
    }));


    //     let result = {
    //         Town:'',
    //         Latitude:0,
    //         Longitude:0,
    //     };

    //    function isEmptyString(x){
    //        return x!=='';
    //    }


    //     for (let i = 3; i < input.length; i++) {
    //        let [town,latitude,longitude] = input[i].split('|').filter(isEmptyString).map(x=>x.trim()).


    //        latitude= Number(latitude).toFixed(2);
    //        longitude=Number(longitude).toFixed(2);
    //        result['Town'] += town;
    //        result['Latitude']+=latitude;
    //        result['Longitude']+=longitude;

    //     }


    //      return JSON.stringify(result);//result.JSON.stringify()

}
console.log(solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
));
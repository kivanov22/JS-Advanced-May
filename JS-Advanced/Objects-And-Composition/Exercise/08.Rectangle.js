function rectangle(width, height, color) {

    width = Number(width);
    height = Number(height);


    function capitalize(text){
        return text[0].toUpperCase() + text.slice(1);
    }

    // function calcArea(){
    //     return this.width * this.height;
    // }
    return {
        width: width,
        height: height,
        color: capitalize(color),
        calcArea:()=>{
            return width * height;
        }
    }




}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

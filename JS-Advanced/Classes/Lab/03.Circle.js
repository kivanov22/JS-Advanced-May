class Circle{
    constructor(radius){
      this.radius=radius;
    }
    get diameter(){//find diameter
        return 2* this.radius;
    }
    set diameter(value){//find radius
        this.radius=value/2;
    }
    get area(){//find area
        return Math.PI * (this.radius **2);
    }
}
let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);

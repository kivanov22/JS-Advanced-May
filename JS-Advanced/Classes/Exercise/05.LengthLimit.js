class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = Number(innerLength);


    }
    increase(value) {
        if (value > 0) {//typeof value === 'number'
            this.innerLength += value;
        }

    }
    decrease(value) {
        // if (value < 0) {//typeof value === 'number'

        // } else 
        if (this.innerLength < 0) {

            this.innerLength = 0;
        } else {
            this.innerLength -= value;
        }
    }
    toString() {
        let result = this.innerString;
        if (this.innerString.length <= this.innerLength) {
            return result;
        } else if (this.innerLength <= 0) {
            this.innerLength = 0;
            return result = '...';
        } else {
            return result = this.innerString.slice(0, this.innerLength) + '...';
        }

    }

}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test

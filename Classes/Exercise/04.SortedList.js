
class List {
    constructor(add, remove, get, size) {
        this.collection = [];
        this.size = 0;
    }

    add(element) {
        this.collection.push(element);
        this.collection.sort((a, b) => a - b);//sort ascending
        this.size += 1;
    }
    remove(index) {
        if (index < 0 || index >= this.collection.length) {
            throw new Error('Invalid Index');
        }
        this.collection.splice(index, 1);
        this.size -= 1;
    }
    get(index) {
        if (index < 0 || index >= this.collection.length) {
            throw new Error('Invalid Index');
        }
        return this.collection[index];
    }
    

}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));

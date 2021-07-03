function createSortedList() {
    let listNumbers = [];

    function add(element) {
        listNumbers.push(element);
        listNumbers = listNumbers.sort((a, b) => a - b);

        this.size++;
    }

    function remove(index) {

        if (index >= 0 && index < listNumbers.length) {
            listNumbers.splice(index, 1);

            listNumbers = listNumbers.sort((a, b) => a - b);
            this.size--;
        }

    }

    function get(index) {

        if (index >= 0 && index < listNumbers.length) {
            return listNumbers[index];


            // listNumbers = listNumbers.sort((a, b) => a - b);
        }

    }

    return {
        add,
        remove,
        get,
        size:0,
    };
}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));

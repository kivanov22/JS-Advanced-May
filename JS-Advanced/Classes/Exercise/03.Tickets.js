function solve(arrStrings, criteria) {
    class Ticket {

        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

        compareTo(other, criteria) {//other is another ticket
            if (typeof this[criteria] === 'string') {
                return this[criteria].localeCompare(other[criteria]);
            } else {
                return this[criteria] - other[criteria];
            }
        }
    }

    let tickets = [];

    for (let i = 0; i < arrStrings.length; i++) {
        let [destination, price, status] = arrStrings[i].split('|');
        price = Number(price);
        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket);

    }
    tickets.sort((a, b) => a.compareTo(b, criteria));//alphabetical

    return tickets;



}
console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
));
class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = +budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        // let [productName, productQuantity, productTotalPrice] = products.split('');

        // if (this.budgetMoney >= productTotalPrice) {
        //     this.stockProducts.push({ name: productName, quantity: productQuantity });
        //     this.budgetMoney -= productTotalPrice;
        //     this.history.push(`Successfully loaded ${productQuantity} ${productName}`).join('\n');
        // }

        // if (this.stockProducts[productName] === productName) {//??
        //     this.stockProducts[productName] += productQuantity;
        // }

        // this.history.push(`There was not enough money to load ${productQuantity} ${productName}`).join('\n');
        let messageLog = []
        for (let entry of products) {
            entry = entry.split(' ')

            let price = +entry.pop()
            let quantity = +entry.pop()
            let product = entry.join(' ')
            if (this.budgetMoney - price >= 0) {
                if (this.stockProducts[product]) this.stockProducts[product] += quantity
                else this.stockProducts[product] = quantity
                this.budgetMoney -= price
                messageLog.push(`Successfully loaded ${quantity} ${product}`)
            } else {
                messageLog.push(`There was not enough money to load ${quantity} ${product}`)
            }
        }

        this.history = [...this.history, ...messageLog]
        return this.history.join('\n')

    }

    addToMenu(meal, neededProducts, price) {
        //let [productName, productQuantity] = neededProducts.slit('');

        if (!this.menu[meal]) {
            this.menu[meal] = {
                products: [neededProducts],
                price: +price,
            }

            if (Object.keys(this.menu).length > 1) {
                return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
            }else{
                return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
            }

        } else {
            return `The ${meal} is already in the our menu, try something different.`;
        }
    }

    showTheMenu() {
        let allProducts = [];

        for (let product of Object.keys(this.menu)) {
            allProducts.push(`${product} - $ ${this.menu[product].price}`);
        }

        if (!allProducts.length) {
            return 'Our menu is not ready yet, please come later...';
        }
        else {
            return allProducts.join('\n');
        }
    }

    makeTheOrder(meal) {
        if (!this.menu[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        let { products, price } = this.menu[meal];

        for (let item of products[0]) {
            item = item.split(' ');
            let quantity = +item.pop();
            let product = item.join(' ');

            if (this.stockProducts[product] < quantity || !this.stockProducts[product]) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
            }
        }

        for (let item of products[0]) {
            item = item.split(' ');
            let quantity = +item.pop()
            let product = item.join(' ')
            this.stockProducts[product] -= quantity
        }
        this.budgetMoney += price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${price}.`

    }

}
// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

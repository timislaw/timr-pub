const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
let amount = 0;
let priceOne = 0;
let priceTwo = 0;


class Order {
    constructor (one, two, oneQ, twoQ, price) {
        this.firstItem = one;
        this.secItem = two;
        this.firstQty = oneQ;
        this.secQty = twoQ;
        this.price = price;
    };

    yourOrder() {
        console.log(this.firstItem);

        return `You ordered ${this.firstQty} ${this.firstItem} and ${this.secQty} ${this.secItem}, for $${this.price}`;
    };

    yourAmount() {
        amount += this.price;
        return amount;
    };


};

const renderErr = () => {
    const err = document.createElement('h2');
    document.querySelector('#error').innerHTML = '';
    err.textContent = `Input all fields`;
    document.querySelector('#error').appendChild(err);
}

const renderOrder = (order) => {
    console.log(order)
    const h = document.createElement('h3');
    const p = document.createElement('p');
    const sp = document.createElement('br');
    document.querySelector('#amount').innerHTML = '';
    h.textContent = `Your amount is $${order.yourAmount()}`;
    p.textContent = order.yourOrder();
    document.querySelector('#output').appendChild(p);
    document.querySelector('#output').appendChild(sp);
    document.querySelector('#amount').appendChild(h);
};

document.querySelector('#orders').addEventListener('click', (e) => {
    let firstItem = input.elements.firstItem.value;
    let secItem = input.elements.secItem.value;
    let firstQty = parseInt(input.elements.firstQty.value);
    let secQty = parseInt(input.elements.secQty.value);
    console.log(firstItem);
    if (!firstItem || !secItem || !firstQty || !secQty) {
        renderErr();
    } else {
    let pricesOne = priceOne + ((randomNumber(1, 25)) * firstQty);
    let pricesTwo = priceTwo + ((randomNumber(1, 25)) * secQty);
    let wholePrice = pricesOne + pricesTwo;
    let orders = new Order(firstItem, secItem, firstQty, secQty, wholePrice);
    renderOrder(orders);
    };
    e.preventDefault();
});

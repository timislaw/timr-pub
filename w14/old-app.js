const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

let amount = 0;
const items = ['Hawaiian Shirt', 'Poke Bowl', 'Spam Musubi', 'Snorkel Kit'];
let price = 0;




class Order { 
    constructor(item, price) {
    this.item = item;
    this.price = price;
    };


    yourOrder() {
        return `You ordered a ${this.item} for $${this.price}.`
    
    };
    
    yourAmount() {
        amount += this.price;
        return amount;
    };

};




const renderOrder = (order) => {
    const h = document.createElement('h3');
    const p = document.createElement('p');
    const sp = document.createElement('br');

    p.textContent = order.yourOrder();
    // p.textContent = firstQty
    document.querySelector('#output').appendChild(p);
    document.querySelector('#output').appendChild(sp);
    document.querySelector('#amount').innerHTML = '';
    h.textContent = `Your amount is $${order.yourAmount()}`;
    document.querySelector('#amount').appendChild(h);
    const para = document.getElementById('input');
    let firstItem = para.elements.firstItem.value;
    let div = document.createElement('div');
    div.textContent = firstItem;
    let secItem = para.elements.secItem.value;
    div.textContent = secItem; 

    document.querySelector('#test').appendChild(div);

};



document.querySelector("#orders").addEventListener("click", (e) => {
  let item = items[randomNumber(0, 3)];
  let prices = price + randomNumber(1, 25) 
  console.log(item, prices);
  const orders = new Order(item, prices);
  renderOrder(orders);
  e.preventDefault();

});

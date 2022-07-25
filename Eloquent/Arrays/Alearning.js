const list = document.querySelector(".output ul");
const totalBox = document.querySelector(".output p");
let total = 0;
list.innerHTML = '';
totalBox.textContent = '';

const products = [
        "Underpants: 6.99",
        "Socks: 5.99",
        "T-shirt: 14.99",
        "Trousers: 31.99",
        "Shoes: 23.99"
]

for (const product of products) {
    const subArray = product.split(':');
    const name = subArray[0];
    const price = Number(subArray[1]);
    total += price;
    const itemText = `${name} — $${price}`;
  
    const listItem = document.createElement('li');
    listItem.textContent = itemText;
    list.appendChild(listItem);
  }
  
  totalBox.textContent = `Total: $${total.toFixed(2)}`;
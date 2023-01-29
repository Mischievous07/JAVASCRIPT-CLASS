var inventory = [];

var product1 = { name: "Tablet", model: "Samsung", cost: 250, quantity: 15 };
var product2 = { name: "Action Figures", model: "Marvel", cost: 15, quantity: 250 };
var product3 = { name: "Baskets", model: "Target", cost: 7, quantity: 500 };

inventory.push(product1, product2, product3);

console.log(inventory);
console.log("The quantity of the third item is: " + inventory[2].quantity);

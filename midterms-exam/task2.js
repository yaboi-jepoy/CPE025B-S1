function getInventoryValuation(inventory) {
  // tech, furniture
  let totalPrice = [0, 0];
  inventory.forEach((element) => {
    if (element.price != 0) {
      if (element.category == "Tech") {
        totalPrice[0] += element.price * element.qty;
      } else if (element.category == "Furniture") {
        totalPrice[1] += element.price;
      }
    }
  });

  return `Tech: ${totalPrice[0]}, Furniture: ${totalPrice[1]}`;
}

// Test Code
const testInventory = [
  { name: "Monitor", qty: 2, price: 200, category: "Tech" },
  { name: "Mouse", qty: 0, price: 50, category: "Tech" },
  { name: "Desk", qty: 1, price: 300, category: "Furniture" },
  { name: "Lamp", qty: 2, price: 50, category: "Furniture" },
];
console.log(getInventoryValuation(testInventory));

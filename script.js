const product_name = document.getElementById("productName");
const product_price = document.getElementById("unitPrice");
const product_quantity = document.getElementById("quantity");
const total_price = document.getElementById("calculateButton");

function calculateTotal(){
  const name = product_name.value;
  const price = parseFloat(product_price.value);
  const quantity = parseInt(product_quantity.value);
  const total = price * quantity;
  return total;

}
total_price.addEventListener("click", () => {
  const total = calculateTotal();
  document.getElementById("subtotal").textContent = `Ksh ${total.toFixed(2)}`;

  const taxRate = 0.16; // 16% tax rate
  const taxAmount = total * taxRate;
  document.getElementById("tax").textContent = `Ksh ${taxAmount.toFixed(2)}`;

  const grandTotal = total + taxAmount;
  document.getElementById("total").textContent = `Ksh ${grandTotal.toFixed(2)}`;

  alert(`Product: ${product_name.value}\nUnit Price: Ksh ${product_price.value}\nQuantity: ${product_quantity.value}\nSubtotal: Ksh ${total.toFixed(2)}\nTax (16%): Ksh ${taxAmount.toFixed(2)}\nGrand Total: Ksh ${grandTotal.toFixed(2)}`);
});

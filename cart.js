const cartContainer = document.getElementById("cart-items");
const totalDisplay = document.getElementById("total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    totalDisplay.textContent = "Total: $0";
    return;
  }

  let total = 0;

  cart.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";
    itemDiv.innerHTML = `
      <h3>${item.name}</h3>
      <p>Price: $${item.price} x ${item.qty}</p>
      <button onclick="removeItem(${item.id})">Remove</button>
    `;
    total += item.price * item.qty;
    cartContainer.appendChild(itemDiv);
  });

  totalDisplay.textContent = `Total: $${total}`;
}

function removeItem(id) {
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

renderCart();

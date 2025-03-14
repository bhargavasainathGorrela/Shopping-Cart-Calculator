const itemNameInput = document.getElementById("itemName");
const itemPriceInput = document.getElementById("itemPrice");
const itemQuantityInput = document.getElementById("itemQuantity");
const addItemButton = document.getElementById("addItem");
const cartTableBody = document.querySelector("#cartTable tbody");
const totalCostElement = document.getElementById("totalCost");


let cartItems = [];

function addItem() {
    const name = itemNameInput.value.trim();
    const price = parseFloat(itemPriceInput.value);
    const quantity = parseInt(itemQuantityInput.value);

    if (!name || isNaN(price) || isNaN(quantity) || price <= 0 || quantity <= 0) {
        alert("Please enter valid item details.");
        return;
    }

    
    const item = { name, price, quantity };
    cartItems.push(item);

   
    itemNameInput.value = "";
    itemPriceInput.value = "";
    itemQuantityInput.value = "";

    
    updateCartDisplay();
}


function updateCartDisplay() {
    
    cartTableBody.innerHTML = "";

    let totalCost = 0;

 
    cartItems.forEach((item, index) => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = item.name;

        const priceCell = document.createElement("td");
        priceCell.textContent = `$${item.price.toFixed(2)}`;

        const quantityCell = document.createElement("td");
        quantityCell.textContent = item.quantity;

        const totalCell = document.createElement("td");
        const itemTotal = item.price * item.quantity;
        totalCell.textContent = `$${itemTotal.toFixed(2)}`;

        row.appendChild(nameCell);
        row.appendChild(priceCell);
        row.appendChild(quantityCell);
        row.appendChild(totalCell);

        cartTableBody.appendChild(row);

        
        totalCost += itemTotal;
    });

    
    totalCostElement.textContent = totalCost.toFixed(2);
}


addItemButton.addEventListener("click", addItem);
// ==================================================
// QUICKCART MINI E-COMMERCE
// ==================================================

// querySelector() gives JavaScript a reference to an HTML element.
const productList = document.querySelector("#productList");
const cartList = document.querySelector("#cartList");
const cartCount = document.querySelector("#cartCount");
const cartTotal = document.querySelector("#cartTotal");
const message = document.querySelector("#message");

// References to the sale form and its input fields.
const saleForm = document.querySelector("#saleForm");
const nameInput = document.querySelector("#productName");
const priceInput = document.querySelector("#productPrice");
const searchBox = document.querySelector("#searchBox");

// An array that stores the products added to the cart.
// The cart starts empty.
const cart = [];

// An array of product objects.
// The products exist as JavaScript data before they become HTML.
const products = [
    { id: 1, name: "Wireless Mouse", price: 299, sale: true, stock: 7 },
    { id: 2, name: "USB-C Hub", price: 449, sale: true, stock: 3 },
    { id: 3, name: "Laptop Stand", price: 599, sale: false, stock: 9 },
    { id: 4, name: "Mechanical Keyboard", price: 899, sale: true, stock: 2 }
];

// Before touching the DOM, confirm the data in the console.
products.forEach(function (product) {
    console.log(product.name, product.price);
});

// List only the products that are on sale.
function getSaleProducts() {
    return products.filter(function (product) {
        return product.sale === true;
    });
}

// ==================================================
// DISPLAY PRODUCTS ON THE HTML PAGE
// ==================================================

function displayProducts(items) {
    // Clear the existing product cards before rendering new ones.
    productList.innerHTML = "";

    items.forEach(function (product) {
        // Create the HTML elements for each product card.
        const card = document.createElement("article");
        const title = document.createElement("h3");
        const price = document.createElement("p");
        const stockInfo = document.createElement("p");
        const button = document.createElement("button");

        // Add the product information to the elements.
        title.textContent = product.name;
        price.textContent = `R${product.price.toFixed(2)}`;
        stockInfo.textContent = `Stock: ${product.stock}`;

        // Set the button text and store the product ID.
        button.textContent = "Add to Cart";
        button.dataset.productId = product.id;

        // Apply the product-card styling.
        card.classList.add("product-card");

        // Highlight products with low stock.
        if (product.stock <= 3) {
            card.classList.add("low-stock");
        }

        // Listen for clicks on this product's Add to Cart button.
        button.addEventListener("click", function () {
            addToCart(product.id);
        });

        // Add the elements to the product card.
        card.appendChild(title);
        card.appendChild(price);
        card.appendChild(stockInfo);
        card.appendChild(button);

        // Add the completed card to the HTML page.
        productList.appendChild(card);
    });
}

// ==================================================
// ADD A PRODUCT TO THE CART
// ==================================================

function addToCart(productId) {
    // Find the product using its ID.
    const product = products.find(function (item) {
        return item.id === productId;
    });

    // Check whether the product exists.
    if (!product) {
        message.textContent = "Product not found.";
        message.className = "message error";
        return;
    }

    // Add the product to the cart array.
    cart.push(product);

    // Refresh the cart display and total.
    displayCart();

    // Show a success message.
    message.textContent = `${product.name} added to your cart.`;
    message.className = "message success";

    // Log the updated cart for debugging.
    console.log("Product added:", product.name);
    console.log("Cart contents:", cart);
}

// ==================================================
// DISPLAY CART ITEMS AND REMOVE BUTTONS
// ==================================================

function displayCart() {
    // Clear the existing cart display before rebuilding it.
    cartList.innerHTML = "";

    // Create a list item for every product in the cart.
    cart.forEach(function (product, index) {
        const item = document.createElement("li");
        const text = document.createElement("span");
        const removeButton = document.createElement("button");

        // Display the product name and price.
        text.textContent =
            `${product.name} - R${product.price.toFixed(2)}`;

        // Create a Remove button for this specific cart item.
        removeButton.textContent = "Remove";

        // Remove this item when its button is clicked.
        removeButton.addEventListener("click", function () {
            removeFromCart(index);
        });

        // Put the product information and button into the list item.
        item.appendChild(text);
        item.appendChild(removeButton);

        // Add the list item to the cart on the HTML page.
        cartList.appendChild(item);
    });

    // Update the cart count and total every time the cart changes.
    updateCartSummary();
}

// ==================================================
// REMOVE A PRODUCT FROM THE CART
// ==================================================

function removeFromCart(index) {
    // Remove one item from the cart array at the selected index.
    cart.splice(index, 1);

    // Refresh the cart display, count and total.
    displayCart();

    // Confirm the removal in the browser console.
    console.log("Cart item removed. Current cart:", cart);
}

// ==================================================
// UPDATE THE CART COUNT AND TOTAL
// ==================================================

function updateCartSummary() {
    // Display the number of items in the cart.
    cartCount.textContent = cart.length;

    // Calculate the total price of all cart items.
    let total = 0;

    cart.forEach(function (product) {
        total = total + product.price;
    });

    // Display the total with two decimal places.
    cartTotal.textContent = total.toFixed(2);

    // Log the current cart summary for debugging.
    console.log("Cart count:", cart.length);
    console.log("Cart total:", total.toFixed(2));
}

// ==================================================
// ADD A NEW SALE PRODUCT USING THE FORM
// ==================================================

saleForm.addEventListener("submit", function (event) {
    // Prevent the page from refreshing when the form is submitted.
    event.preventDefault();

    // Read the input values and remove extra spaces from the name.
    const name = nameInput.value.trim();
    const price = Number(priceInput.value);

    // Validate the product name and price.
    if (
        name === "" ||
        priceInput.value.trim() === "" ||
        !Number.isFinite(price) ||
        price <= 0
    ) {
        message.textContent =
            "Enter a valid product name and price.";
        message.className = "message error";
        return;
    }

    // Create and display the new sale product.
    addSaleProduct(name, price);
});

// Turn the form input into a new product object.
function addSaleProduct(name, price) {
    const newProduct = {
        id: Date.now(),
        name: name,
        price: price,
        sale: true,
        stock: 5
    };

    // Store the new product in the products array.
    products.push(newProduct);

    // Refresh the sale products displayed on the page.
    displayProducts(getSaleProducts());

    // Clear the form after a successful submission.
    saleForm.reset();

    // Display a success message.
    message.textContent = "Sale product added successfully.";
    message.className = "message success";

    // Confirm the new product in the console.
    console.log("New sale product:", newProduct);
}

// ==================================================
// LIVE SEARCH FOR SALE PRODUCTS
// ==================================================

searchBox.addEventListener("input", function () {
    // Read the search text and convert it to lowercase.
    const searchText = searchBox.value.toLowerCase().trim();

    // Find sale products whose names match the search text.
    const matches = getSaleProducts().filter(function (product) {
        return product.name.toLowerCase().includes(searchText);
    });

    // Display only the matching products.
    displayProducts(matches);

    // Log the search results for debugging.
    console.log("Search results:", matches);
});

// ==================================================
// INITIAL PAGE LOAD
// ==================================================

// Display the sale products when the page first loads.
displayProducts(getSaleProducts());

// Display the empty cart, count and total.
displayCart();

// Debug the page like a developer.
console.log("All products:", products);
console.log("Initial cart:", cart);
console.log("Product list element:", productList);
console.log("Cart list element:", cartList);
import {
    Product,
    productcatalog
} from "./models/productcatalog";

import {
    shoppingCartItems
} from "./landingpage";

import {
    loadNavigation
} from "./header";

window.onload = function () {
    loadNavigation();

    getShoppingCart()
    
    displayItemAmount()
}

let sum: number = 0;

// HTML for wrapper, arrow-icon at the top and shopping cart footer
let wrapper: HTMLDivElement = document.querySelector(".wrapper");
let arrowContainer: HTMLDivElement = document.createElement("div");
arrowContainer.classList.add("back-arrow-container");
let arrow = document.createElement("i");
arrowContainer.appendChild(arrow);
arrow.setAttribute("class", "bi bi-arrow-left");
wrapper.before(arrowContainer);
arrow.addEventListener("click", () => {
    window.history.back();
});
let shoppingcartContainer: HTMLDivElement = document.createElement("div");
shoppingcartContainer.id = "shoppingcart-container";
wrapper.appendChild(shoppingcartContainer);

let shoppingCartFooter: HTMLDivElement = document.createElement("div");
shoppingCartFooter.classList.add("shoppingcart-footer");
let total: HTMLParagraphElement = document.createElement("p");
total.classList.add("total");
shoppingCartFooter.appendChild(total)
shoppingcartContainer.after(shoppingCartFooter);

let checkoutButtonContainer: HTMLDivElement = document.createElement("div");
let checkoutButton: HTMLAnchorElement = document.createElement("a");
checkoutButton.innerHTML = "Gå till kassan";
checkoutButtonContainer.classList.add("checkout-button");
checkoutButton.classList.add("button-buy");
checkoutButton.setAttribute("href", "checkout.html");
checkoutButtonContainer.appendChild(checkoutButton);
shoppingCartFooter.appendChild(checkoutButtonContainer)

checkoutButton.addEventListener("click", () => {
    location.href = "checkout.html";
})

// Check what's in the shopping cart
function getShoppingCart() {
    sum = 0;
    updatePrice(sum);
    shoppingcartContainer.innerHTML = "";
    if (shoppingCartItems.length <= 0) {
        shoppingcartContainer.innerHTML = "Din varukorg är tom!"
    } else { 
    shoppingCartItems.forEach(element => {
        loadShoppingCart(element);
        totalPrice(element.price);
    })
}
}

// Load the shopping cart
function loadShoppingCart(element: Product) {
    total.innerHTML = "";
    // Cart Items
    let items: HTMLDivElement = document.createElement("div");
    items.classList.add("cart-items");
    shoppingcartContainer.appendChild(items);

    // Cart Image Section
    let cartImageSection: HTMLDivElement = document.createElement("div");
    cartImageSection.classList.add("cart-images");

    // Cart Image
    let cartImage: HTMLImageElement = document.createElement("img");
    cartImage.setAttribute("src", element.img);
    cartImageSection.appendChild(cartImage);

    items.appendChild(cartImageSection);

    // Cart Info Section
    let item: HTMLDivElement = document.createElement("div");
    item.classList.add("cart-item");
    items.appendChild(item);

    // Product name
    let name: HTMLSpanElement = document.createElement("span");
    name.classList.add("product-name");
    name.innerHTML = element.name;
    item.appendChild(name);

    // Price
    let price: HTMLSpanElement = document.createElement("span");
    price.classList.add("price");
    price.innerHTML = element.price.toLocaleString() + " kr";
    name.after(price);

    // Details
    let details: HTMLSpanElement = document.createElement("p");
    details.innerHTML = element.details;
    details.classList.add("details");
    price.after(details);

    // Cart Icons
    let cartIcons: HTMLDivElement = document.createElement("div");
    cartIcons.classList.add("cart-icons");
    item.after(cartIcons)
    let removeIcon: HTMLSpanElement = document.createElement("span");
    removeIcon.classList.add("bi", "bi-x");
    cartIcons.appendChild(removeIcon);

    removeIcon.addEventListener("click", (e) => { // Add event listeners to remove icons
        updatePrice(sum);
        deleteItem(element); // If remove icon is clicked, call this function
    })

}

// Delete item from cart
function deleteItem(itemToDelete: Product) {
    let objectIndex: number = shoppingCartItems.indexOf(itemToDelete); // Find index on object to remove
    shoppingCartItems.splice(objectIndex, 1); // Use splice to remove object
    localStorage.setItem("Shopping cart", JSON.stringify(shoppingCartItems)); // Update local storage
    displayItemAmount();
    getShoppingCart();
}

// Calculate sum
function totalPrice(element: number) {
    let price: number = element;
    sum += price;
    updatePrice(sum);
}

// Update sum
function updatePrice(sum: number) {
    total.innerHTML = "Summa: " + sum.toLocaleString() + " kr";
}

// Display amount of items in shopping cart
export function displayItemAmount() {
    let itemAmount: HTMLSpanElement = document.querySelector(".item-amount");  
    itemAmount.innerHTML = shoppingCartItems.length.toString();
}
import {
    Cart
} from "./models/cart";

import {
    productcatalog
} from "./models/productcatalog";

import {
    Product
} from "./models/productcatalog";

import {
    displayItemAmount
} from "./shoppingcart";

export let shoppingCartItems: Product[] = JSON.parse(localStorage.getItem("Shopping cart")) || [];

export function loadLandingPage() {

    // Container for landing page
    let wrapper: HTMLDivElement = document.querySelector(".wrapper-landingpage");
    let container: HTMLDivElement = document.createElement("div");
    container.classList.add("products");
    wrapper.appendChild(container);

    // Modal
    let modal: HTMLDivElement = document.createElement("div");

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    modal.classList.add("modalContainer");
    modal.id = "modal-container"

    let modalContent: HTMLDivElement = document.createElement("div");
    modalContent.classList.add("modalContent");
    modalContent.id = "modal-content"

    container.after(modal)
    modal.appendChild(modalContent);

    let close: HTMLSpanElement = document.createElement("span");
    close.classList.add("bi", "bi-x");
    modalContent.appendChild(close);

    let modalHeader: HTMLParagraphElement = document.createElement("p");
    modalHeader.innerHTML = "Upplevelsen lades till i kundkorgen!";
    modalHeader.classList.add("modalHeader");
    modalContent.appendChild(modalHeader);
    close.addEventListener("click", () => {
        modal.style.display = "none";
    })

    let buttonContainer: HTMLDivElement = document.createElement("div");
    buttonContainer.classList.add("button-container")
    let checkoutButton: HTMLAnchorElement = document.createElement("a");
    checkoutButton.innerHTML = "Gå till kundkorgen";
    checkoutButton.classList.add("button-buy");
    checkoutButton.setAttribute("href", "shoppingcart.html");
    let keepShoppingButton: HTMLAnchorElement = document.createElement("a");
    keepShoppingButton.classList.add("button-shop");
    keepShoppingButton.innerHTML = "Forsätta handla";
    keepShoppingButton.addEventListener("click", () => {
        modal.style.display = "none";
    })

    buttonContainer.appendChild(keepShoppingButton);
    buttonContainer.appendChild(checkoutButton);
    modalHeader.after(buttonContainer);

    // Loop through the product catalog
    for (let i = 0; i < productcatalog.length; i++) {

        // Product card
        let product: HTMLDivElement = document.createElement("div");
        product.classList.add("product");
        container.appendChild(product);

        // Image container
        let imgContainer: HTMLDivElement = document.createElement("div");
        imgContainer.classList.add("img-container");
        product.append(imgContainer);

        // Product image
        let image: HTMLImageElement = document.createElement("img");
        image.setAttribute("src", productcatalog[i].img);
        imgContainer.appendChild(image);

        // Container for product info
        let productCard: HTMLDivElement = document.createElement("div");
        productCard.classList.add("product-card");
        imgContainer.after(productCard);

        // Product name
        let productName: HTMLSpanElement = document.createElement("span");
        productName.classList.add("product-name");
        productName.innerHTML = productcatalog[i].name;

        // Stars
        let productRating: HTMLSpanElement = document.createElement("span");
        productRating.classList.add("star-rating");
        productRating.innerHTML = "";

        // Users
        let productUsers: HTMLSpanElement = document.createElement("span");
        productUsers.classList.add("users");
        productUsers.innerHTML = productcatalog[i].users;

        productCard.appendChild(productName);
        productName.after(productRating);
        productRating.after(productUsers);

        // Product footer
        let productFooter: HTMLDivElement = document.createElement("div");
        productFooter.classList.add("product-footer");
        productUsers.after(productFooter);

        // Price
        let priceContainer: HTMLDivElement = document.createElement("div");
        priceContainer.classList.add("price-container");
        productFooter.appendChild(priceContainer);
        let price: HTMLSpanElement = document.createElement("span");
        price.classList.add("price");
        price.innerHTML = productcatalog[i].price.toLocaleString() + " kr";
        priceContainer.appendChild(price);

        // Buttons
        let productButtons: HTMLDivElement = document.createElement("div");
        productButtons.classList.add("product-buttons");
        priceContainer.after(productButtons);
        let buttonBuy: HTMLAnchorElement = document.createElement("a");
        buttonBuy.classList.add("button-buy");
        buttonBuy.innerHTML = "Köp";
        buttonBuy.id = "btn-menu";
        buttonBuy.setAttribute("data-id", productcatalog[i].id.toString());

        let buttonInfo: HTMLAnchorElement = document.createElement("a");
        buttonInfo.classList.add("button-info");
        buttonInfo.setAttribute("data-id", productcatalog[i].id.toString());
        buttonInfo.innerHTML = "Mer info";

        productButtons.appendChild(buttonInfo);
        productButtons.appendChild(buttonBuy);

        buttonInfo.addEventListener("click", () => {
            location.href = "product.html?id=" + productcatalog[i].id;
        })

        buttonBuy.addEventListener("click", (e) => {
            addToShoppingCart(productcatalog[i]);
            modal.style.display = "block";
            displayItemAmount();
        })
    }
}

export function addToShoppingCart(item: Product) {
    shoppingCartItems.push(item);
    localStorage.setItem("Shopping cart", JSON.stringify(shoppingCartItems));
}
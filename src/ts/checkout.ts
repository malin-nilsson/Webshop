import {
    displayItemAmount
  } from "./shoppingcart";
  
  import {
    shoppingCartItems
  } from "./landingpage";
  
  import {
    loadNavigation
  } from "./header";
  
  
  window.onload = function () {
    loadNavigation();
  
    displayItemAmount();
  
    loadCartinCheckout();
  
    formFunction();
  }
  
  let sum: number = 0;
  let container: HTMLDivElement = document.querySelector(".bigWrapper");
  let cart: HTMLDivElement = document.createElement("div");
  cart.classList.add("checkout-cart");
  let totalContainer: HTMLDivElement = document.createElement("div");
  totalContainer.classList.add("total-container");
  
  let total: HTMLParagraphElement = document.createElement("p");
  total.classList.add("cart-total");
  container.prepend(totalContainer);
  totalContainer.appendChild(total);
  
  function loadCartinCheckout() {
    // Loop through all items in the shopping cart and create HTML
    for (let i = 0; i < shoppingCartItems.length; i++) {
      let cartItem: HTMLDivElement = document.createElement("div");
      cartItem.classList.add("checkout-cart-item");
      let imgContainer: HTMLDivElement = document.createElement("div");
      imgContainer.classList.add("checkout-img-container");
      let img: HTMLImageElement = document.createElement("img");
      img.setAttribute("src", shoppingCartItems[i].img);
      cartItem.appendChild(imgContainer);
      imgContainer.appendChild(img);
      let productInfo: HTMLDivElement = document.createElement("div");
      productInfo.classList.add("checkout-cart-info");
      let productName: HTMLSpanElement = document.createElement("span");
      productName.classList.add("checkout-cart-name")
      productName.innerHTML = shoppingCartItems[i].name;
      let productPrice: HTMLSpanElement = document.createElement("span");
      productPrice.classList.add("checkout-cart-price")
      productPrice.innerHTML = shoppingCartItems[i].price.toLocaleString() + " kr";
      let productDetails: HTMLSpanElement = document.createElement("span");
      productDetails.classList.add("checkout-cart-details")
      productDetails.innerHTML = shoppingCartItems[i].details;
      cartItem.appendChild(productInfo);
      productInfo.appendChild(productName);
      productInfo.appendChild(productPrice);
      productInfo.appendChild(productDetails);
      container.prepend(cart);
      cart.appendChild(cartItem);
    }
  }
  
  getProductPrice();
  
  // Loop through shopping cart items and grab the price
  function getProductPrice() {
    shoppingCartItems.forEach(element => {
      getTotal(element.price);
    })
  }
  
  // Sum up the shopping cart total 
  function getTotal(productprice: number) {
    let price: number = productprice;
    sum += price;
    displayTotalAmount(sum);
  }
  
  // Display total amount on page
  function displayTotalAmount(sum: number) {
    total.innerHTML = "Totalt: " + sum.toLocaleString() + " kr";
  }
  
  
  function formFunction() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation");
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          event.preventDefault();
          event.stopPropagation();
          if (!form.checkValidity()) {
            modal.style.display = "none";
          }
  
          form.classList.add("was-validated");
        },
  
      );
    });
  
  
  // Arrow
    document.getElementById("arrowBack").addEventListener("click", () => {
      window.history.back();
    })
  
    // Modal
    
    // Get the modal
    let modal = document.getElementById("myModal");
  
    // Get the button that opens the modal
    let btn = document.querySelector("button");
  
    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];
  
    // When the user clicks on the button, open the modal
    btn.addEventListener("click", () => {
      modal.style.display = "block";
      localStorage.removeItem('Shopping cart'); // Clear shopping cart after purchase
    });
  
    // When the user clicks on <span> (x), close the modal
    span.addEventListener("click", () => {
      modal.style.display = "none";
      location.href = "confirmation.html";
    });
  
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
        location.href = "confirmation.html";
      }
    }
  }
  
  export default (function () {
    "use strict";
  });
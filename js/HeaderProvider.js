class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>K-boost</title>
            <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="32x32" crossorigin="anonymous" />
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
            <link rel="stylesheet" href="../css/style.css" />
            <link rel="stylesheet" href="../notifier/notifier.min.css" />
            
          </head>
          <body>
            <header class="header">
              <a href="../index.html" class="logo">
                <img src="../images/logo.png" alt="" />
              </a>
              <nav class="navbar" id="navbar">
                <a href="../index.html">home</a>
                <a href="../pages/about.html">about</a>
                <a href="../pages/supplements.html">supplements</a>
                <a href="../pages/clothes.html">clothes</a>
                <a href="../pages/contact.html">contact</a>
              </nav>
              <div class="icons">
                <div class="fas fa-search" id="search-btn" onclick="searchIconClickHandler()"></div>
                <div class="fas fa-shopping-cart" id="cart-btn" onclick="cartIconClickHandler()"></div>
                <div class="fas fa-bars" id="menu-btn" onclick="menuIconClickHandler()"></div>
              </div>
              <div class="search-form" id="search-form">
                <input type="search" id="search-box" placeholder="Search" />
                <label for="search-box" class="fas fa-search" onclick="searchIconClickHandler()"></label>
              </div>
              <div class="cart-items-container" id="cart-items">
                <div id="emptyCart" class="cart-item">
                  <div id="emptyCartTitle" class="content">
                    <h3>Your cart is empty.</h3>
                  </div>
                </div>
                <div class="cart-buttons">
                <button id="closeCart" href="#box" class="btn close-cart-button" onclick="closeCartHandler()">
                  Close 
                </button>
                <button id="checkOut" href="#box" class="btn disabled" disabled>
                  Check Out
                </button>
                </div
              </div>
            </header>
        `;
  }
}

customElements.define("my-header", MyHeader);

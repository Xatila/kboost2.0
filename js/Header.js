class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>K-boost</title>
        
            <!-- font awesome cdn link  -->
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
            />
        
            <!-- custom css file link  -->
            <link rel="stylesheet" href="../css/style.css" />
            <link rel="shortcut icon" type="image/png" href="images/favicon.png" />
          </head>
          <body>
            <!-- header section starts  -->
        
            <header class="header">
              <a href="index.html" class="logo">
                <img src="../images/logo.png" alt="" />
              </a>
        
              <nav class="navbar">
                <a href="../index.html">home</a>
                <a href="../pages/about.html">about</a>
                <a href="../pages/supplements.html">supplements</a>
                <a href="../pages/reviews.html">review</a>
                <a href="../pages/contact.html">contact</a>
                <a href="../pages/clothes.html">clothes</a>
              </nav>
        
              <div class="icons">
                <div class="fas fa-search" id="search-btn"></div>
                <!-- make items in cart stackable and removable + product counter at cart icon -->
                <div class="fas fa-shopping-cart" id="cart-btn">
                  <div class="cart-items-counter"></div>
                </div>
                <div class="fas fa-bars" id="menu-btn"></div>
              </div>
        
              <div class="search-form">
                <input type="search" id="search-box" placeholder="Search" />
                <label for="search-box" class="fas fa-search"></label>
              </div>
        
              <div class="cart-items-container">
                <div id="emptyCart" class="cart-item">
                  <div class="content">
                    <h3>Your cart is empty.</h3>
                  </div>
                </div>
                <button id="checkOut" href="#box" class="btn" onclick="getTotalPrice()">
                  Check Out
                </button>
              </div>
            </header>
            <!-- header section ends -->
        `;
  }
}

customElements.define("my-header", MyHeader);
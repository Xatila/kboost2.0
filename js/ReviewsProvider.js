class Reviews extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<section class="review" id="review">
        <h1 class="heading">customer's <span>review</span></h1>
      
        <div class="box-container">
          <div class="box">
            <img src="../images/quote-img.png" alt="" class="quote" />
            <p>Amazing products. I feel alive again! Thank you K-boost!</p>
            <img src="../images/pic-1.png" class="user" alt="" />
            <h3>Yusein Kerdakov</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>
      
          <div class="box">
            <img src="../images/quote-img.png" alt="" class="quote" />
            <p>
              Very good quality, my skin feels pretty well in this material. All my
              clothes are from this shop, I recommend to order only here if you need
              new sport clothes.
            </p>
            <img src="../images/pic-2.png" class="user" alt="" />
            <h3>Larisa Uniko</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
          </div>
      
          <div class="box">
            <img src="../images/quote-img.png" alt="" class="quote" />
            <p>It's good.</p>
            <img src="../images/pic-3.png" class="user" alt="" />
            <h3>Kevin Baliev</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
          </div>
        </div>
      </section>
      `;
  }
}

customElements.define("my-reviews", Reviews);

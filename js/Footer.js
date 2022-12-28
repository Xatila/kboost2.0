class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<!-- footer section starts  -->
        <section class="footer">
          <div class="share">
            <a
              href="https://www.facebook.com/profile.php?id=100009880836171"
              class="fab fa-facebook-f"
            ></a>
            <a href="https://twitter.com/Memechl1" class="fab fa-twitter"></a>
            <a
              href="https://www.instagram.com/kevinbaliev/"
              class="fab fa-instagram"
            ></a>
            <a
              href="https://www.linkedin.com/in/kevin-baliev-b99360247/"
              class="fab fa-linkedin"
            ></a>
          </div>
        
          <div class="links">
          <a href="../index.html">home</a>
          <a href="../pages/about.html">about</a>
          <a href="../pages/supplements.html">supplements</a>
          <a href="../pages/clothes.html">clothes</a>
          <a href="../pages/contact.html">contact</a>
          </div>
        
          <div class="credit">
            created by <span>Kevin Baliev</span> | all rights reserved
          </div>
        </section>
        <!-- footer section ends -->       
        </body>
        </html>
        `;
  }
}

customElements.define("my-footer", MyFooter);

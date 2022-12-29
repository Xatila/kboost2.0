class Home extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<section class="home" id="home">
    <div class="content">
      <h3>K-boost supplements</h3>
      <p>
        Proteins, creatines, gainers, bcaa's and clothes. Top quality company in
        food supplements.
      </p>
      <a href="./pages/supplements.html" class="btn">get yours now</a>
    </div>
  </section>`;
  }
}

customElements.define("my-home", Home);

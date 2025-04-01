app.component("gadget-display", {
  props: ["gadget"],
  template:
    /*html*/
    ` <div class="gadget">
    <img v-bind:src="gadget.image" />
    <h2>{{gadget.name}}</h2>
    <p>Prix : {{gadget.price}}€</p>
    <p v-if="gadget.inStock">✅ En stock</p>
    <p v-else>❌ En rupture de stock</p>
    <button
      class="add-btn"
      :disabled="!gadget.inStock"
      @click="addToCart(gadget)"
    >
      Ajouter au panier
    </button>
      <h3 v-if="gadget.reviews.length > 0">Avis :</h3>
      <ul v-if="gadget.reviews.length > 0">
        <li v-for="review in gadget.reviews" :key="review.name">
          <strong>{{ review.name }}</strong> - {{ review.rating }}
          <p>{{ review.review }}</p>
        </li>
      </ul>
      <p v-else>Aucun avis pour ce produit.</p>
    <review-form :reviews="gadget.reviews" @review-submitted="addReview"> </review-form>
  </div>
`,
  methods: {
    addToCart(gadget) {
      this.$emit("add-to-cart", gadget);
    },
    addReview(review) {
      console.log(review);
      this.gadget.reviews.push(review);
    },
  },
});

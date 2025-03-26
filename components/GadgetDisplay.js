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
  </div>`,
  methods: {
    addToCart(gadget) {
      this.$emit("add-to-cart", this.gadget);
    },
  },
});

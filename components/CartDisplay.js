app.component("cart-display", {
  props: {
    cart: {
      type: Array,
    },
    cartTotal: {
      type: Number,
    },
    discountedTotal: {
      type: Number,
    },
  },

  template:
    /*html*/
    `<div class="cart">
    <h2>🛒 Mon Panier ({{cart.length}})</h2>
    <ul>
      <li v-if="cart.length > 0" v-for="gadget in cart" :key="gadget.id">
        {{gadget.name}} - {{gadget.price}}€
        <button class ="remove-btn" @click="removeQuantity(gadget)">➖</button>
        <strong>{{gadget.cartQuantity}}</strong>
        <button class ="add-btn" @click="addQuantity(gadget)">➕</button>
        <button class="remove-btn" @click="removeFromCart(gadget)">
          ❌
        </button>
      </li>
      <li v-else>Votre panier est vide.</li>
    </ul>
    <h3>
      💰 Total : 
      <span v-if="cartTotal < 1000" style="display: hidden"
        >{{cartTotal}}€</span
      >
      <span v-if="cartTotal >= 1000">
        <s>{{cartTotal}}€</s> ➝
        <strong>{{discountedTotal}}€ (-10%)</strong>
      </span>
    </h3>
  </div>`,
  methods: {
    removeFromCart(gadget) {
      this.$emit("remove-from-cart", gadget);
    },
    addQuantity(gadget) {
      gadget.cartQuantity++;
    },
    removeQuantity(gadget) {
      if (gadget.cartQuantity > 1) {
        gadget.cartQuantity--;
      } else {
        this.removeFromCart(gadget);
      }
    },
  },
});

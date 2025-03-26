const app = Vue.createApp({
  data() {
    return {
      title: "Vue Gadget Shop",
      description:
        "Découvrez les derniers gadgets électroniques de haute technologie !",
      gadgets: [
        {
          id: 1,
          name: "Smartphone XZ",
          price: 799,
          image: "./assets/phone.jpg",
          inStock: true,
          cartQuantity: 0,
        },
        {
          id: 2,
          name: "Laptop Pro",
          price: 1299,
          image: "./assets/laptop.jpg",
          inStock: false,
          cartQuantity: 0,
        },
        {
          id: 3,
          name: "Ecouteurs Bluetooth",
          price: 199,
          image: "./assets/earbuds.jpg",
          inStock: true,
          cartQuantity: 0,
        },
      ],
      cart: [],
    };
  },
  methods: {
    addToCart(gadget) {
      if (this.cart.includes(gadget)) {
        this.gadget.cartQuantity += 1;
      } else {
        this.cart.push(gadget);
      }
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
    addQuantity(gadget) {
      gadget.cartQuantity += 1;
    },
    removeQuantity(gadget) {
      if (gadget.cartQuantity > 1) {
        gadget.cartQuantity -= 1;
      } else {
        this.removeFromCart(gadget);
      }
    },
  },
  computed: {
    cartTotal() {
      return this.cart.reduce((acc, gadget) => acc + gadget.price, 0);
    },
    discountedTotal() {
      if (this.cartTotal > 1000) {
        return this.cartTotal * 0.9;
      } else {
        return this.cartTotal;
      }
    },
  },
});

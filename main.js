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
        },
        {
          id: 2,
          name: "Laptop Pro",
          price: 1299,
          image: "./assets/laptop.jpg",
          inStock: false,
        },
        {
          id: 3,
          name: "Ecouteurs Bluetooth",
          price: 199,
          image: "./assets/earbuds.jpg",
          inStock: true,
        },
      ],
      cart: [],
    };
  },
  methods: {
    addToCart(gadget) {
      this.cart.push(gadget);
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
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

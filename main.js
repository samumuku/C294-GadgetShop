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
          cartQuantity: 1,
          reviews: [],
        },
        {
          id: 2,
          name: "Laptop Pro",
          price: 1299,
          image: "./assets/laptop.jpg",
          inStock: false,
          cartQuantity: 1,
          reviews: [],
        },
        {
          id: 3,
          name: "Ecouteurs Bluetooth",
          price: 199,
          image: "./assets/earbuds.jpg",
          inStock: true,
          cartQuantity: 1,
          reviews: [],
        },
      ],
      cart: [],
    };
  },
  methods: {
    addToCart(gadget) {
      let itemInCart = this.cart.find((item) => item.id === gadget.id);

      if (itemInCart) {
        this.gadget.cartQuantity++;
      } else {
        this.cart.push({ ...gadget });
      }
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
    addReview(gadget, review) {
      if (review) {
        gadget.reviews.push(review);
      }
    },
  },
  computed: {
    cartTotal() {
      return this.cart.reduce(
        (acc, gadget) => acc + gadget.price * gadget.cartQuantity,
        0
      );
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

app.component("review-form", {
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      name: "",
      rating: "",
      review: "",
    };
  },
  template:
    /*html*/
    `
    <form class="review-form" @submit.prevent="addReview">
    <label for="name">Nom:</label>
    <input id="name" v-model="name">
    <label for="rating">Note:</label>
    <select id="rating" v-model="rating">
    <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐ - Excellent</option>
    <option value="⭐⭐⭐⭐">⭐⭐⭐⭐ - Très bien</option>
    <option value="⭐⭐⭐">⭐⭐⭐ - Moyen</option>
    <option value="⭐⭐">⭐⭐ - Mauvais</option>
    <option value="⭐">⭐ - Très mauvais</option>
    </select>
    <div class="review-block">
    <label for="review">Commentaire:</label>      
    <textarea id="review" v-model="review"></textarea>
    </div>
    <button class="add-btn" >Envoyer l'avis</button>
    </form>`,
  methods: {
    addReview() {
      let productReview = {
        name: this.name,
        rating: this.rating,
        review: this.review,
      };
      this.$emit("review-submitted", productReview);

      this.name = "";
      this.review = "";
      this.rating = null;
    },
  },
});

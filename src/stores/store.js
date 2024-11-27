import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    user: null,
    products: [],
    cart: [],
    loading: false,
  }),

  actions: {
    setLoading(value) {
      this.loading = value;
    },

    login(email) {
      this.user = { email };
    },

    addProduct(product) {
      this.setLoading(true);
      setTimeout(() => {
        this.products.push(product);
        this.setLoading(false); // End loading
      }, 1000);
    },

    addToCart(product) {
      this.setLoading(true); // Start loading
      setTimeout(() => { // Simulate async operation
        const existingItem = this.cart.find((item) => item.id === product.id);
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          this.cart.push({ ...product, quantity: 1 });
        }
        this.setLoading(false); // End loading
      }, 1000); // Simulate delay
    },

    removeFromCart(productId) {
      this.setLoading(true);
      setTimeout(() => {
        this.cart = this.cart.filter((item) => item.id !== productId);
        this.setLoading(false);
      }, 1000);
    },
  },
});

import axios from 'axios';
import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    user: JSON.parse(localStorage.getItem("user")) || null,
    products: [],
    cart: [],
    loading: false,
    offers: [],
  }),

  actions: {
    setLoading(value) {
      this.loading = value;
    },

    login(email) {
      this.user = { email };
      localStorage.setItem("user", JSON.stringify(this.user));
    },

    logout() {
      this.user = null;
      localStorage.removeItem("user");
    },

    addProduct(product) {
      this.setLoading(true);
      setTimeout(() => {
        this.products.push(product);
        this.setLoading(false);
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
    async fetchProducts() {
      this.setLoading(true);
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos', {
          params: {
            _limit: 20, // Limit the result to 20 items
          },
        });
        this.offers = response.data;
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        this.setLoading(false);
      }
    },
  },
});
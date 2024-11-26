import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    user: null, 
    products: [], 
    cart: [],
  }),

  actions: {
    login(email) {
      this.user = { email };
    },

    addProduct(product) {
      this.products.push(product);
    },

    addToCart(product) {
      const existingItem = this.cart.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
    },

    removeFromCart(productId) {
      this.cart = this.cart.filter((item) => item.id !== productId);
    },
  },
});

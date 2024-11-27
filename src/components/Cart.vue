<template>
  <div class="border rounded p-5 my-2">
    <div v-if="store.loading" class="d-flex justify-content-center align-items-center mt-5">
      <div class="spinner-border text-info" role="status" style="width: 10rem; height: 10rem;">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else-if="store.cart.length === 0" class="text-center mt-5">
      <router-link to="/">
        <h3 class="title-text">Your cart is empty!</h3>
        <p class="title-text">
          Add some items to get started.
          <i class="bi bi-box-arrow-up-right"></i>
        </p>
      </router-link>
    </div>
    <div v-else class="row g-3 p-3">
      <h1 class="my-4 text-center title-text">Your Cart</h1>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="item in store.cart" :key="item.id">
        <div class="card shadow-sm rounded border border-1 p-3 text-center" style="height: 300px;">
          <img src="../assets/phone.jpg" class="card-img-top border rounded-3" alt="..." style="height: 150px;" />
          <p class="card-title my-3">{{ item.title }} ({{ item.quantity }})</p>
          <button type="button" class="btn btn-outline-danger mt-auto" @click="removeFromCart(item.id)">Remove</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from '../stores/store';

export default {
  setup() {
    const store = useStore();

    const removeFromCart = (productId) => {
      store.removeFromCart(productId);
    };

    return { store, removeFromCart };
  },
};
</script>

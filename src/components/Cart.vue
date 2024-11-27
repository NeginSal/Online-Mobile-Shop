<template>
  <div>
    <h1 class="my-4 text-center title-text">Your Cart</h1>
    <div v-if="store.loading" class="d-flex justify-content-center align-items-center mt-5">
      <div class="spinner-border text-info" role="status" style="width: 10rem; height: 10rem;">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else class="row g-3">
      <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="item in store.cart" :key="item.id">
        <div class="card shadow-sm rounded border border-1 p-3 text-center">
          <img src="../assets/phone.jpg" class="card-img-top border rounded-3" alt="..." style="height: 150px;">
          <h5 class="card-title my-3">{{ item.title }} ({{ item.quantity }})</h5>
          <button type="button" class="btn btn-outline-danger" @click="removeFromCart(item.id)">Remove</button>
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

<template>
  <h1 class="my-3 text-center title-text">Product List</h1>
  <div v-if="store.loading" class="d-flex justify-content-center align-items-center mt-5">
    <div class="spinner-border text-info" role="status" style="width: 10rem; height: 10rem;">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div v-else class="row g-3">
    <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="product in store.products" :key="product.id">
      <div class="card shadow-sm rounded border border-1 p-3 text-center">
        <img src="../assets/phone.jpg" class="card-img-top border rounded-3" alt="..." style="height: 150px;">
        <h5 class="card-title my-3">{{ product.title }} ({{ product.color }})</h5>
        <button type="button" class="btn btn-info" @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from '../stores/store';

export default {
  setup() {
    const store = useStore();

    const addToCart = (product) => {
      store.addToCart(product);
    };

    return { store, addToCart };
  },
};
</script>

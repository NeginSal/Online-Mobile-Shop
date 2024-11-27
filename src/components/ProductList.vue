<template>
  <h1 class="mt-3 text-center title-text">Product List</h1>
  <div class="row row-cols-1 row-cols-md-3 g-3 mt-3 p-3 text-center">
    <div class="col shadow-sm p-3 rounded" v-for="product in store.products" :key="product.id">
      <div class="card p-3">
        <img src="../assets/phone.jpg" class="card-img-top border-bottom" alt="...">
        <h5 class="card-title my-3">{{ product.title }} ({{ product.color }})</h5>
        <!-- <p class="card-text">{{ product.description }}</p> -->
        <button type="button" class="btn btn-outline-info" @click="addToCart(product)">Add to Cart</button>
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

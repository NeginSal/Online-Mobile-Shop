<template>
  <div>
    <h1 class="mt-3 text-center title-text">Your Cart</h1>
    <div class="row row-cols-1 row-cols-md-4 g-3 mt-3 p-3 text-center">
      <div class="col shadow-sm" v-for="item in store.cart" :key="item.id">
        <div class="card p-3">
          <img src="../assets/phone.jpg" class="card-img-top border rounded-3" alt="...">
          <h5 class="card-title my-3">{{ item.title }} ({{ item.quantity }})</h5>
          <!-- <p class="card-text">{{ product.description }}</p> -->
          <button type="button" class="btn btn-outline-success" @click="removeFromCart(item.id)">Remove</button>
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

<template>
  <div class="row g-3 my-3 border rounded-3 p-3">
    <h1 class="text-center title-text">SpecialOffers</h1>
    <div v-if="store.loading" class="d-flex justify-content-center align-items-center my-5">
      <div class="spinner-border text-info" role="status" style="width: 10rem; height: 10rem;">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="product in store.offers" :key="product.id">
      <div class="card shadow-sm rounded border border-2 border-info-subtle p-3 text-center" style="height: 300px;">
        <img :src="product.thumbnailUrl" class="card-img-top border rounded-3" alt="..." style="height: 150px;" />
        <p class="card-title my-3">{{ product.title }}</p>
        <button type="button" class="btn btn-info mt-auto" @click="store.addToCart(product)" :disabled="!store.user">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted } from 'vue';
import { useStore } from '../stores/store';

export default {
  setup() {
    const store = useStore();

    onMounted(() => {
      store.fetchProducts();
    });

    return {
      store,
    };
  },
};
</script>

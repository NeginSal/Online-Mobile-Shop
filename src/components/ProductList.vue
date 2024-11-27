<template>
  <div>
    <div class="d-flex justify-content-between align-items-baseline my-4 border p-3 rounded">
      <h1 class="text-center title-text">Product List</h1>
      <div class="input-group" style="width: 400px;">
        <span class="input-group-text rounded"><i class="bi bi-search"></i></span>
        <input type="text" class="form-control rounded" placeholder="Search ..." v-model="searchQuery" />
      </div>
    </div>

    <div v-if="store.loading" class="d-flex justify-content-center align-items-center mt-5">
      <div class="spinner-border text-info" role="status" style="width: 10rem; height: 10rem;">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <div v-else class="border p-3 rounded vh-100">
      <div class="row g-3">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="product in paginatedProducts" :key="product.id">
          <div class="card shadow-sm rounded border border-2 border-info-subtle p-3 text-center" style="height: 300px;">
            <img src="../assets/phone.jpg" class="card-img-top border rounded-3" alt="..." style="height: 150px;" />
            <h5 class="card-title my-3">{{ product.title }} ({{ product.color }})</h5>
            <button type="button" class="btn btn-info mt-auto" @click="addToCart(product)" :disabled="!store.user">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Pagination Controls -->
    <nav class="my-3" v-if="totalPages > 1">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <button class="page-link" @click="prevPage">
            <i class="bi bi-chevron-left"></i>
          </button>
        </li>
        <li class="page-item" :class="{ active: page === currentPage }" v-for="page in totalPages" :key="page">
          <button class="page-link" @click="goToPage(page)">{{ page }}</button>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <button class="page-link" @click="nextPage">
            <i class="bi bi-chevron-right"></i>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { useStore } from '../stores/store';
import { ref, computed } from 'vue';

export default {
  setup() {
    const store = useStore();
    const searchQuery = ref("");
    const currentPage = ref(1); // Current page number
    const itemsPerPage = ref(8); // Number of items per page

    // Filtered products based on search query
    const filteredProducts = computed(() => {
      if (!searchQuery.value.trim()) {
        return store.products;
      }
      return store.products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });

    // Total pages based on the filtered products
    const totalPages = computed(() =>
      Math.ceil(filteredProducts.value.length / itemsPerPage.value)
    );

    // Paginated products for the current page
    const paginatedProducts = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return filteredProducts.value.slice(start, end);
    });

    // Pagination methods
    const goToPage = (page) => {
      if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
      }
    };

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value -= 1;
      }
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value += 1;
      }
    };

    const addToCart = (product) => {
      store.addToCart(product);
    };

    return {
      store,
      searchQuery,
      currentPage,
      itemsPerPage,
      filteredProducts,
      paginatedProducts,
      totalPages,
      goToPage,
      prevPage,
      nextPage,
      addToCart,
    };
  },
};
</script>

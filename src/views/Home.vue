<template>
  <div class="row">
    <div class="col-12 col-lg-8">
      <ProductList />
    </div>
    <div class="col-12 col-lg-4 border-start">
      <ProductForm />
    </div>
  </div>
</template>

<script setup>
import ProductForm from '../components/ProductForm.vue';
import ProductList from '../components/ProductList.vue';


</script>

<style scoped></style>
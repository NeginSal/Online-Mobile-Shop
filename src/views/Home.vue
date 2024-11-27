<template>
  <div class="row">
    <div class="col-12 col-lg-9">
      <ProductList />
    </div>
    <div class="col-12 col-lg-3 border-start">
      <ProductForm />
    </div>
  </div>
</template>

<script setup>
import ProductForm from '../components/ProductForm.vue';
import ProductList from '../components/ProductList.vue';


</script>

<style scoped></style>
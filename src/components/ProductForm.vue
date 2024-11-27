<template>
  <div class="row mx-auto">
    <h3 class="my-5 text-center title-text">Create Product</h3>
    <template v-if="store.user">
      <div class="col-12 mb-3">
        <label for="titleInput" class="form-label">Title:</label>
        <input v-model="title" :class="{ 'is-invalid': errors.title }" class="form-control" id="titleInput"
          @blur="validateTitle" />
        <div v-if="errors.title" class="invalid-feedback">
          {{ errors.title }}
        </div>
      </div>
      <div class="col-12 mb-3">
        <label for="colorInput" class="form-label">Color:</label>
        <input v-model="color" :class="{ 'is-invalid': errors.color }" class="form-control" id="colorInput"
          @blur="validateColor" />
        <div v-if="errors.color" class="invalid-feedback">
          {{ errors.color }}
        </div>
      </div>
      <div class="col-12 mb-3">
        <button v-if="store.loading" class="btn btn-success w-100" type="button" disabled>
          <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
          <span role="status">Loading...</span>
        </button>
        <button v-else type="button" class="btn btn-success w-100" @click="addProduct">
          Add Product
        </button>
      </div>
    </template>

    <template v-else>
      <div class="alert alert-danger text-center">
        You must be logged in to create a product.
      </div>
    </template>
  </div>
</template>

<script>
import { useStore } from "../stores/store";
import { ref } from "vue";

export default {
  setup() {
    const store = useStore();
    const title = ref("");
    const color = ref("");
    const errors = ref({ title: null, color: null });

    const validateTitle = () => {
      if (!title.value) {
        errors.value.title = "Title is required.";
      } else if (title.value.length < 3) {
        errors.value.title = "Title must be at least 3 characters.";
      } else {
        errors.value.title = null;
      }
    };

    const validateColor = () => {
      if (!color.value) {
        errors.value.color = "Color is required.";
      } else if (color.value.length < 3) {
        errors.value.color = "Color must be at least 3 characters.";
      } else {
        errors.value.color = null;
      }
    };

    const validate = () => {
      validateTitle();
      validateColor();
      return !errors.value.title && !errors.value.color;
    };

    const addProduct = () => {
      if (validate()) {
        store.addProduct({
          id: Date.now(),
          title: title.value,
          color: color.value,
        });
        title.value = "";
        color.value = "";
      }
    };

    return { title, color, errors, validateTitle, validateColor, addProduct, store };
  },
};
</script>
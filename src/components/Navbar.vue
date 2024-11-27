<template>
  <div class="row">
    <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom shadow-sm">
      <div class="container-fluid">
        <a class="navbar-brand fw-bold fs-2 text-info" href="#">MobileShop</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-lg-flex justify-content-between" id="navbarNav">
          <ul class="navbar-nav fs-5">
            <li class="nav-item">
              <router-link to="/">
                <a class="nav-link active" aria-current="page" href="#">
                  <i class="bi bi-columns-gap"></i>
                  Home
                </a>
              </router-link>
            </li>
            <li v-if="!user" class="nav-item">
              <router-link to="/login">
                <a class="nav-link active" aria-current="page" href="#">
                  <i class="bi bi-box-arrow-in-right"></i>
                  Login
                </a>
              </router-link>
            </li>
            <li v-if="user" class="nav-item">
              <router-link to="/cart">
                <a class="nav-link active" aria-current="page" href="#">
                  <i class="bi bi-cart2"></i>
                  Cart
                </a>
              </router-link>
            </li>
            <li v-if="user" class="nav-item">
              <router-link to="/offers">
                <a class="nav-link active" aria-current="page" href="#">
                  <i class="bi bi-box2-heart"></i>
                  SpecialOffers
                </a>
              </router-link>
            </li>
          </ul>
          <div v-if="user" class="d-flex align-items-center">
            <span class="fs-5 me-3">
              <i class="bi bi-person-check "></i>
              {{ user.email }}
            </span>
            <button class="btn btn-outline-danger" @click="logout">
              Logout
              <i class="bi bi-box-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { useStore } from "../stores/store";
import { computed } from "vue";
import router from "../router";

export default {
  setup() {
    const store = useStore();
    const user = computed(() => store.user);

    const logout = () => {
      store.logout();
      router.push("/login");
    };

    return { user, logout };
  },
};
</script>
<style scoped></style>
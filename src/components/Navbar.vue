<template>
  <div class="row">
    <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom shadow-sm">
      <div class="container-fluid">
        <a class="navbar-brand fw-bold fs-2 text-info" href="#">MobileShop</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav fs-5">
            <li class="nav-item">
              <router-link to="/">
                <a class="nav-link active" aria-current="page" href="#">
                  <i class="bi bi-columns-gap"></i>
                  Home
                </a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login">
                <a class="nav-link active" aria-current="page" href="#">
                  <i class="bi bi-box-arrow-in-right"></i>
                  Login
                </a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cart">
                <a class="nav-link active" aria-current="page" href="#">
                  <i class="bi bi-cart2"></i>
                  Cart
                </a>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>

</script>

<style scoped></style>
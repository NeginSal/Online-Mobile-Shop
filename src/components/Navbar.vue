<template>
  <div class="row">
    <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom shadow-sm">
      <div class="container-fluid">
        <a class="navbar-brand fw-bold fs-2 " href="#">MobileShop</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav fs-5">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <router-link to="/">
                <i class="bi bi-columns-gap"></i>
                  Home
                </router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <router-link to="/login">
                  <i class="bi bi-box-arrow-in-right"></i>
                  Login
                </router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <router-link to="/cart">
                  <i class="bi bi-cart2"></i>
                  Cart
                </router-link>
              </a>
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
<template>
  <div class="row">
    <h1 class="text-center mt-5">Login Form</h1>
    <div class="row g-3 w-50 mx-auto">
      <div class="col-12 mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" v-model="email"/>
      </div>
      <div class="col-12 mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" v-model="password"/>
      </div>
      <div class="col-12 mb-3">
        <button type="button" class="btn btn-success w-100">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../router';
import { useStore } from '../stores/store';
import { ref } from 'vue';

export default {
  setup() {
    const store = useStore();
    const email = ref('');
    const password = ref('');

    const login = () => {
      store.login(email.value);
      alert('Login successful!');

    };

    return { email, password, login };
  },
};
</script>

<template>
  <div class="row">
    <h1 class="text-center mt-5 title-text">Login Form</h1>
    <div class="row g-3 w-50 mx-auto border shadow-lg p-3 rounded-3">
      <div class="col-12 mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" v-model="email"
          :class="{ 'is-invalid': errors.email }" @blur="validateEmail" />
        <div v-if="errors.email" class="invalid-feedback">
          {{ errors.email }}
        </div>
      </div>

      <div class="col-12 mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" v-model="password"
          :class="{ 'is-invalid': errors.password }" @blur="validatePassword" />
        <div v-if="errors.password" class="invalid-feedback">
          {{ errors.password }}
        </div>
      </div>

      <div class="col-12 mb-3">
        <button type="button" class="btn btn-success w-100" @click="handleLogin">
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router";
import { useStore } from "../stores/store";
import { ref } from "vue";

export default {
  setup() {
    const store = useStore();
    const email = ref("");
    const password = ref("");
    const errors = ref({ email: null, password: null });

    // Validate Email when user clicks out of the input field
    const validateEmail = () => {
      if (!email.value) {
        errors.value.email = "Email is required.";
      } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        errors.value.email = "Please enter a valid email address.";
      } else {
        errors.value.email = null;
      }
    };

    // Validate Password when user clicks out of the input field
    const validatePassword = () => {
      if (!password.value) {
        errors.value.password = "Password is required.";
      } else if (password.value.length < 6) {
        errors.value.password = "Password must be at least 6 characters.";
      } else {
        errors.value.password = null;
      }
    };

    const validate = () => {
      let isValid = true;

      // Validate Email and Password
      validateEmail();
      validatePassword();

      return !errors.value.email && !errors.value.password;
    };

    const handleLogin = () => {
      if (validate()) {
        store.login(email.value);
        localStorage.setItem("userEmail", email.value);
        router.push("/");
        email.value = "";
        password.value = "";
        errors.value = { email: null, password: null };
      }
    };

    return { email, password, errors, handleLogin, validateEmail, validatePassword };
  },
};
</script>
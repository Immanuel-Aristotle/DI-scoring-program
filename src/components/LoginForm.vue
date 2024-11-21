<template>
  <router-link to="/">Return to Home</router-link>
  <div class="login-main">
    <h2>Login</h2>
    <form @submit.prevent="submitForm" style="font-size: 20px;">
      <label for="Email">Email</label>
      <input type="text" v-model="userEmail" id="userEmail" required />

      <label for="Password">Password</label>
      <input type="password" v-model="password" id="password" required />

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
//import router from '@/router';

export default {
  name: 'LoginForm',
  data() {
    return {
      userEmail: '',
      password: ''
    };
  },
  methods: {
    submitForm() {
      // Handle the form submission logic
      console.log('Username:', this.userEmail);
      console.log('Password:', this.password);
      // Add additional logic here (like authentication, redirect, etc.)
    }
  }
};
</script>

<style scoped>
/* Add styles specific to the login form */
form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

label,
input {
  margin-bottom: 8px;
}

button {
  margin-top: 12px;
}

div.login-main {
  margin: 30px 500px 0 500px;
  border: 2px solid black;
  padding: 20px 80px 60px 80px;
}
</style>

<template>
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
export default {
  name: 'LoginForm',
  data() {
    return {
      userEmail: '',
      password: '',
    };
  },
  methods: {
    submitForm() {
      // Simulate authentication (this would be replaced with real logic)
      if (this.userEmail && this.password) {
        console.log('Username:', this.userEmail);
        console.log('Password:', this.password);

        // Redirect to another page (e.g., Dashboard)
        this.$router.push('/dashboard'); // Replace '/dashboard' with your desired route
      } else {
        alert('Please fill in all fields.');
      }
    },
  },
};
</script>

<style scoped>
/* Add styles specific to the login form */
form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

label, input {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin-bottom: 8px;
}

button {
  margin-top: 12px;
}

div.login-main {
  margin: 30px 500px 0 500px;
  border: 2px solid black;
  border-radius: 10px;
  padding: 20px 80px 60px 80px;
}
</style>
